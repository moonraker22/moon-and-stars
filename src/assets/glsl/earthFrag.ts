const earthFrag = `
precision mediump float;	
varying vec2 vUv;
varying vec3 vNormal;

uniform sampler2D uDayTexture;
uniform sampler2D uNightTexture;
uniform vec3 uSunDirection;
uniform float uScale;

void main() {
	// Day
	vec3 daySample = texture2D( uDayTexture, vUv ).rgb;
	vec3 nightSample = texture2D( uNightTexture, vUv ).rgb;



	// Atmosphere
	vec3 atmosphereColor = vec3(0.3, 0.6, 0.8);
	float intensity = 1.0 - dot( vNormal, vec3( 0.0, 0.0, 1.0 ) );
	vec3 atmosphere = atmosphereColor * pow(intensity, 1.5 * uScale);

	daySample += atmosphere;
	nightSample += atmosphere * 0.2;

	// compute cosine sun to normal so -1 is away from sun and +1 is toward sun.
	float cosineAngleSunToNormal = dot(normalize(vNormal), uSunDirection);

	// sharpen the edge beween the transition
	cosineAngleSunToNormal = clamp( cosineAngleSunToNormal * 10.0, -1.0, 1.0);

	// convert to 0 to 1 for mixing
	float mixAmount = cosineAngleSunToNormal * 0.5 + 0.5;

	vec3 finalColor = mix(nightSample, daySample, mixAmount);

	// Set the color
	gl_FragColor = vec4(finalColor, 1.0);
	//gl_FragColor = vec4(vec3(nightSample.r, 0.0,0.0), 1.0);
}`;

export default earthFrag;
