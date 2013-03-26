require 'rubygems'
require 'bundler'
Bundler.require(:default, :assets)

require 'sprockets'
map '/assets' do
  sprockets = Sprockets::Environment.new
  sprockets.append_path 'assets/stylesheets'
  sprockets.append_path 'assets/images'
  sprockets.context_class.class_eval do
    def asset_path(path, options = {})
      path
    end
  end
  run sprockets
end

require './main'
run Sinatra::Application
