---
layout: post
title: Alien Swarm low-end config
---
 
<img src="http://cdn.steampowered.com/v/gfx/apps/630/header.jpg?t=1279905788" height="136" width="292px" alt="Alien Swarm logo" align="right">
Alien Swarm looks really pretty. It's also unplayable if you have an integrated graphics card. I'm tried to make a low-end configuration file akin to this [Half Life 2 netbook config](http://netbook-gaming.co.uk/hl2.php).

On my Intel X3100 GMA, it's still unplayable. I hit peaks of 20 FPS. The fog and particle systems really seem to bog things down, dropping the FPS to 3 areas like on the first level. Unfortunately, you can't disable them; Valve has them [marked](http://developer.valvesoftware.com/wiki/Console_Command_List) as "cheats." Never mind completely disabling the lighting system would be much more of a cheat in this game, and you can already do that.

Launch options:
    -dxlevel 90 -w 480 -h320

Paste these options into a file. Save it as autoexec.cfg in C:\Program Files\Steam\steamapps\common\alien swarm\swarm\cfg

	//Alien Swarm
	//Integrated graphics card config.
	//http://jamesgecko.com/alienswarm

	// Vastly improves performance of Alien Swarm on integrated graphics cards
	// Unfortunately, that's not saying much. Expect 20 FPS, tops. Maybe 5 FPS in areas
	// with lots of fog.

	//Misc
	cl_showfps 2 //0 off, 1 fps, 2 smoothed fps.
	asw_spinning_stim_cam 0 //disables "picture in picture"
	ai_expression_optimization 1 //People don't make faces when you aren't looking at them.
	mat_disable_ps_patch 1
	mat_vignette_enable 1
	r_dopixelvisibility 0
	r_drawbatchdecals 0
	r_drawdetailprops 0
	r_fastzreject -1


	//Filtering
	mat_disable_bloom 1 //Disables bloom
	mat_hdr_level 0 //Disables HDR
	mat_grain_enable 0 //Disable film grain
	mat_grain_scale_override 1 //Disables film grain. Again.
	mat_aaquality 0
	mat_antialias 0
	mat_bloom 0
	mat_bloomscale 0
	mat_disable_bloom 1
	mat_disable_fancy_blending 1
	mat_forceaniso 0

	//Models
	r_modellodscale 0.10 //reduce quality of models
	r_lod 8 //Level of detail. -8 is best, 8 is worst.
	mat_max_worldmesh_vertices 0

	//Lighting
	r_maxdlights 0 //maximum dynamic lights
	r_dynamic 0 //No dynamic lighting
	r_shadows 0 //No dynamic shadows
	r_lightinterp 0
	mat_filterlightmaps 0
	mat_softwarelighting 1 //1 uses CPU over gfx card.
	mat_disable_lightwarp 1
	r_shadowrendertotexture 0

	//Textures
	mat_compressedtextures 1 //Integrated cards are too slow for uncompressed textures
	mat_specular 0 //Reduce shiny
	mat_showlowresimage 0 //very low quality textures.
	mat_mipmaptextures 0 //makes textures look even worse. Character selection screen unusable.
	mat_fastnobump 1
	mat_picmip 4 //texture detail setting
	mat_parallaxmap 0


	//Water
	r_water_drawreflection 0 //Disables some water effects
	r_waterdrawrefraction 0 //Ditto

	//datacachesize 128

	//Disabling fog/particles
	fod_enable 0 //cheat. This would really help with performance
	r_drawflecks 0
	r_drawrain 0
	r_drawparticles 0 //cheat This would really help with performance
	r_particle_timescale 0 //Particles aren't animated
	r_particle_sim_spike_threshold_ms 0

	r_decals 5 //number of visible blood, bullet holes, etc.
	r_3dsky 0 //We never see the sky

	//Ragdolls
	g_ragdoll_maxcount 0
	ragdoll_sleepaftertime 0
	cl_disable_ragdolls 1 //cheat
	cl_ragdoll_collide 0

	//Glibs from boxes and such
	props_break_max_pieces 0
	prop_active_gib_max_fade_time 0
	prop_active_gib_limit 0

	//Multicore
	r_threaded_particles 1 //I've got a core 2 duo. Disable this stuff on a netbook.
	r_threaded_renderables 1 
	snd_mix_async 1
	mat_queue_mode 2
