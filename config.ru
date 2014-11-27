require 'rubygems'
require 'bundler'
Bundler.require(:default, :assets)

use Rack::CanonicalHost, ENV['CANONICAL_HOST'] if ENV['CANONICAL_HOST']

require 'sprockets'
map '/assets' do
  sprockets = Sprockets::Environment.new
  sprockets.append_path 'assets/javascripts'
  sprockets.append_path 'assets/stylesheets'
  sprockets.append_path 'assets/images'
  sprockets.context_class.class_eval do
    def asset_path(path, options = {})
      path
    end
  end
  run sprockets
end

class NothingMagical < Sinatra::Application
  get '/' do
    erb :home
  end
end

run NothingMagical.new
