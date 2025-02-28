"use strict";

/**
 * ZzFX Music Renderer v2.0.3 by Keith Clark and Frank Force
 */

/**
 * @typedef Channel
 * @type {Array.<Number>}
 * @property {Number} 0 - Channel instrument
 * @property {Number} 1 - Channel panning (-1 to +1)
 * @property {Number} 2 - Note
 */

/**
 * @typedef Pattern
 * @type {Array.<Channel>}
 */

/**
 * @typedef Instrument
 * @type {Array.<Number>} ZzFX sound parameters
 */

/**
 * Generate a song
 *
 * @param {Array.<Instrument>} instruments - Array of ZzFX sound paramaters.
 * @param {Array.<Pattern>} patterns - Array of pattern data.
 * @param {Array.<Number>} sequence - Array of pattern indexes.
 * @param {Number} [speed=125] - Playback speed of the song (in BPM).
 * @returns {Array.<Array.<Number>>} Left and right channel sample data.
 */

// zzfxG() - the sound generator -- returns an array of sample data
let zzfxG = (q = 1, k = .05, c = 220, e = 0, t = 0, u = .1, r = 0, F = 1, v = 0, z = 0, w = 0, A = 0, l = 0, B = 0, x = 0, G = 0, d = 0, y = 1, m = 0, C = 0) => {
    let b = 2 * Math.PI,
    H = v *= 500 * b / zzfxR ** 2,
    I = (0 < x ? 1 : -1) * b / 4,
    D = c *= (1 + 2 * k * Math.random() - k) * b / zzfxR,
    Z = [],
    g = 0,
    E = 0,
    a = 0,
    n = 1,
    J = 0,
    K = 0,
    f = 0,
    p,
    h;
    e = 99 + zzfxR * e;
    m *= zzfxR;
    t *= zzfxR;
    u *= zzfxR;
    d *= zzfxR;
    z *= 500 * b / zzfxR ** 3;
    x *= b / zzfxR;
    w *= b / zzfxR;
    A *= zzfxR;
    l = zzfxR * l | 0;
    for (h = e + m + t + u + d | 0; a < h; Z[a++] = f)
        ++K % (100 * G | 0) || (f = r ? 1 < r ? 2 < r ? 3 < r ? Math.sin((g % b) ** 3) : Math.max(Math.min(Math.tan(g), 1), -1) : 1 - (2 * g / b % 2 + 2) % 2 : 1 - 4 * Math.abs(Math.round(g / b) - g / b) : Math.sin(g), f = (l ? 1 - C + C * Math.sin(2 * Math.PI * a / l) : 1) * (0 < f ? 1 : -1) * Math.abs(f) ** F * q * zzfxV * (a < e ? a / e : a < e + m ? 1 - (a - e) / m * (1 - y) : a < e + m + t ? y : a < h - d ? (h - a - d) / u * y : 0), f = d ? f / 2 + (d > a ? 0 : (a < h - d ? 1 : (h - a) / d) * Z[a - d | 0] / 2) : f), p = (c += v += z) * Math.sin(E * x - I), g += p - p * B * (1 - 1E9 * (Math.sin(a) + 1) % 2), E += p - p * B * (1 - 1E9 * (Math.sin(a) ** 2 + 1) % 2), n && ++n > A && (c += w, D += w, n = 0), !l || ++J % l || (c = D, v = H, n = n || 1);
    return Z
}

// zzfxV - global volume
let zzfxV = .3;

// zzfxR - global sample rate
let zzfxR = 44100;

let zzfxM = function  * (instruments, patterns, sequence, BPM = 125) {
    let instrumentParameters;
    let i;
    let j;
    let k;
    let note;
    let sample;
    let patternChannel;
    let notFirstBeat;
    let stop;
    let instrument;
    let pitch;
    let attenuation;
    let outSampleOffset;
    let isSequenceEnd;
    let sampleOffset = 0;
    let nextSampleOffset;
    let sampleBuffer = [];
    let leftChannelBuffer = [];
    let rightChannelBuffer = [];
    let channelIndex = 0;
    let panning = 0;
    let hasMore = 1;
    let sampleCache = {};
    let beatLength = zzfxR / BPM * 60 >> 2;

    // for each channel in order until there are no more
    for (; hasMore; channelIndex++) {
        // reset current values
        sampleBuffer = [hasMore = notFirstBeat = pitch = outSampleOffset = 0];

        // for each pattern in sequence
        for (let sequenceIndex = 0; sequenceIndex < sequence.length; sequenceIndex++) {
            let patternIndex = sequence[sequenceIndex];
            // get pattern for current channel, use empty 1 note pattern if none found
            patternChannel = patterns[patternIndex][channelIndex] || [0, 0, 0];

            // check if there are more channels
            hasMore |= !!patterns[patternIndex][channelIndex];

            // get next offset, use the length of first channel
            nextSampleOffset = outSampleOffset + (patterns[patternIndex][0].length - 2 - !notFirstBeat) * beatLength;
            // for each beat in pattern, plus one extra if end of sequence
            isSequenceEnd = sequenceIndex == sequence.length - 1;

            for (i = 2, k = outSampleOffset; i < patternChannel.length + isSequenceEnd; notFirstBeat = ++i) {
                // <channel-note>
                note = patternChannel[i];

                // stop if end, different instrument or new note
                stop = i == patternChannel.length + isSequenceEnd - 1 && isSequenceEnd ||
                    instrument != (patternChannel[0] || 0) | note | 0;

                // fill buffer with samples for previous beat, most cpu intensive part
                for (j = 0; j < beatLength && notFirstBeat;
                    // fade off attenuation at end of beat if stopping note, prevents clicking
                    j++ > beatLength - 99 && stop ? attenuation += (attenuation < 1) / 99 : 0) {
                    // copy sample to stereo buffers with panning
                    sample = (1 - attenuation) * sampleBuffer[sampleOffset++] / 2 || 0;
                    leftChannelBuffer[k] = (leftChannelBuffer[k] || 0) - sample * panning + sample;
                    rightChannelBuffer[k] = (rightChannelBuffer[k++] || 0) + sample * panning + sample;

                    yield [leftChannelBuffer, rightChannelBuffer];
                }

                // set up for next note
                if (note) {
                    // set attenuation
                    attenuation = note % 1;
                    panning = patternChannel[1] || 0;
                    if (note |= 0) {
                        // get cached sample
                        sampleBuffer = sampleCache[
                                [
                                    instrument = patternChannel[sampleOffset = 0] || 0,
                                    note
                                ]
                            ] = sampleCache[[instrument, note]] || (
                                // add sample to cache
                                instrumentParameters = [...instruments[instrument]],
                                instrumentParameters[2] *= 2 ** ((note - 12) / 12),

                                // allow negative values to stop notes
                                note > 0 ? zzfxG(...instrumentParameters) : []);
                    }
                }
            }

            // update the sample offset
            outSampleOffset = nextSampleOffset;
        }
    }

    return [leftChannelBuffer, rightChannelBuffer];
}

exports.zzfxG = zzfxG;
exports.zzfxV = zzfxV;
exports.zzfxR = zzfxR;
exports.zzfxM = zzfxM;
exports.default = zzfxM;
