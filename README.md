

https://github.com/awood/hawkins

Hawkins is a Jekyll 3.1+ plugin that incorporates LiveReload into the Jekyll "serve" process.

How to Use

Add the following into your Gemfile

group :jekyll_plugins do
  gem 'hawkins'
end

Then run jekyll liveserve to serve your files. The liveserve commands takes all the arguments that serve does but with a few extras that allow you to specify the port that LiveReload runs on or how long LiveReload will wait. See the --help for more information.
