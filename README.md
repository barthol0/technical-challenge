<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400"></a></p>


## Astute Graphics web developer technical challenge

Here we have a basic Laravel/Vue based application scaffolded out for your starter code.

To get setup:
- Fork and clone or just clone/download this repo.
- Run composer and NPM install
- Laravel Mix is setup to compile any Sass, JS or Vue components by running (**npx mix**)
- Complete the requirements below.
- Submit your challenge code by emailing a link to your fork or providing a download link, thanks!


## Requirements
The purpose of this challenge is to test for basic knowledge of Laravel, Vue v2 and using a Vuex store. Design and presentation are not important, just functionality. Feel free to use any css framework if desired.


A root component `AstuteManager` has been created in `resources/js/vue/components/AstuteManager.vue`.
This component fetches product data from a mocked API and stores it in the VUEX store. 
Currently, this same component fetches the stored product data and outputs it as a simple list when visiting the home route in the browser.

```json
{
    "puid": "com.astutegraphics.autosaviour",
    "name": "Autosaviour",
    "brief": "Autosave, backup + reminders",
    "installed": false
}
```


- Swap out this plugin list for a separate reusable Vue component used for each plugin
- The plugin component should display the `plugin.name` and `plugin.brief` and a button which displays the install state based on the value of `plugin.installed`.
- When a plugin is not installed the action of clicking the button should make a POST API request to the provided `api/plugin/install` endpoint, passing along the value of `plugin.puid` with a key of `plugin_id`.
- If a success 200 response is received, update the `plugin.installed` value to `true` for that plugin in the Vue store and have the plugin's button state update reactively to an installed status.
- This request will respond with an HTTP 500 error 1 in 3 times so handle that in your code.
- Additionally, you need to fully implement an API request and mocked response to uninstall a plugin that is in the installed state using the endpoint `api/plugin/remove` perhaps. This should revert the plugin's button to the install status.


