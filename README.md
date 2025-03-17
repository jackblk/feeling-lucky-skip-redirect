# feeling-lucky-skip-redirect

This is to be used together with Google Feeling Lucky search engine.

## Setup
* Navigate to
  * Chrome: `chrome://settings/searchEngines?search=manage`
  * Edge: `edge://settings/searchEngines`
* Add search engine
  * Name: `Feeling lucky`
  * Keyword: `i`
  * URL: `http://google.com/search?q=%s&btnI`

This will enable you to use the Feeling Lucky, but it will only work on some common search phrases for big sites. For others, it will give you a redirect notice.

As a workaround:
* Install [Tampermonkey](https://www.tampermonkey.net/)
* Install [Skip Google Redirect Script](https://raw.githubusercontent.com/jackblk/feeling-lucky-skip-redirect/main/skip-google-redirect.user.js)

## Usage

In address bar, press `i` then `Tab`. Type in your search then `Enter`. Should take you to the site directly.
