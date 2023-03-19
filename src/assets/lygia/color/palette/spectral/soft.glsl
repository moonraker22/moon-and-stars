#include "../../../math/const.glsl"
/*
original_author: Patricio Gonzalez Vivo
description: Soft chroma spectrum 
use: <vec3> spectral_soft(<float> value)
*/

#ifndef FNC_CHROMA
#define FNC_CHROMA

vec3 spectral_soft(float x) {
    float delta = 0.5;
    vec3 color = vec3(1.0);
    float freq = x * PI;
    color.r = sin(freq - delta);
    color.g = sin(freq);
    color.b = sin(freq + delta);
    return pow(color, vec3(4.0));
}

#endif