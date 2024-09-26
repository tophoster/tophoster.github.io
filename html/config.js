//  ____  _           _    _                    _
// / ___|| | ___  ___| | _| |    ___   __ _  __| |
// \___ \| |/ _ \/ _ \ |/ / |   / _ \ / _` |/ _` |
//  ___) | |  __/  __/   <| |__| (_) | (_| | (_| |
// |____/|_|\___|\___|_|\_\_____\___/ \__,_|\__,_|
// version 2.18.0

// Loading screen language
//
// You can create or edit languages by
// editing/creating files in the languages folder
//
// Default available languages:
// "brazilian_portuguese"
// "english"
// "polish"
// "russian"
config.language = "english"

// Use an image for the logo instead of text
config.logo_use_image = true

// Image filename for the server logo
// (Place the image file in the images folder)
config.logo_image = "logo.png"

// Text to be shown on logo
config.logo_text = "SleekLoad"

// Use the server's name for the logo
config.logo_servername = false

// Center logo?
// "true" or "false"
config.logo_center = false

// Display current map and gamemode?
// "true" or "false"
config.logo_show_info = true

// Use a video for the background?
// Otherwise it will use images
// "true" or "false"
config.background_use_video = true

// Default available videos:
// "blue_rays.webm"
// "purple_blue_rays.webm"
// "green_rays.webm"
//
// You can add your own video backgrounds
// Just make sure they are using webm VP8 format
// (Place the video file in the backgrounds/videos folder)
config.background_video = "purple_blue_rays.webm"

// (Image-background only)
// Enable map-based background image?
// If enabled, the background will be an image based on the server current map
// You need to have a background image with the same name as the map
// Also, the image needs to be in .jpg format
// E.g: gm_flatgrass.jpg, gm_construct.jpg, rp_downtown_v4c_v2.jpg
// "true" or "false"
config.background_map_based = false

// (Image-background only)
// Place one or more images
// Multiple images will automatically shuffle between them
// (Place the image files in the backgrounds/images folder)
config.background_images = [
	"background1.jpg",
	"background2.jpg",
	"background3.jpg",
]

// (Image-background only)
// Random background images order?
// "true" or "false"
config.background_images_random_order = true

// (Image-background only)
// Delay between background images changes
// in milliseconds
config.background_images_duration = 5000

// (Image-background only)
// Image background fade duration
// in milliseconds
config.background_images_fade_duration = 2000

// Enable background overlay?
// "true" or "false"
config.background_overlay = true

// Background darkening amount
// 0 for none (0%), 100 for pitch black (100%)
config.background_darkening = 30

// Play music during the loading screen?
// "true" or "false"
config.music_enable = true

// Display current music name?
// "true" or "false"
config.music_show = true

// Music playlist
// Add as many youtube ids/urls or audio files you want
// (YouTube only works on Chromium beta)
// (Use ogg files for compatibility with default Gmod)
// (Place the audio files in the music folder)
config.music_playlist = [
	{
		name: "Jason Shaw - Sideways Samba - Audionautix.com",
		file: "sideways_samba.ogg",
	},
	{
		name: "Devil Survivor 2 - Exploration",
		youtube: "https://www.youtube.com/watch?v=Zyu-BSdma3g",
	},
	{
		name: "VA-11 Hall-A - Every Day Is Night",
		youtube: "https://youtu.be/H-AfGh8gmiQ",
	},
	{
		name: "Sonic Mania - Comfort Zone",
		youtube: "f4CBQ9nnQSY",
	},
]

// Random music order?
// "true" or "false"
config.music_random_order = true

// Music volume
// Choose a value between 0 (quietest) and 100 (loudest)
config.music_volume = 15

// Use Gmod volume for the music instead of manual volume
config.music_gmod_volume = true

// Enable custom messages?
// "true" or "false"
config.messages_enable = true

// Enter your custom messages below
config.messages_list = [
	"Welcome to SleekLoad!",
	"Customize your loading screen by editing the config file",
	"Enjoy!",
]

// Random message order?
// "true" or "false"
config.messages_random_order = false

// Delay between message changes
// in milliseconds
config.messages_delay = 5000

// Messages fade duration
// in milliseconds
config.messages_fade_duration = 1000

// Show errors inside Garry's Mod?
// Can be useful for finding errors
// "true" or "false"
config.errors_show_ingame = true
