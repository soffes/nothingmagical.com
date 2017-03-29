require 'rubygems'
require 'bundler'
Bundler.require(:default, :assets)

use Rack::CanonicalHost, ENV['CANONICAL_HOST'] if ENV['CANONICAL_HOST']

class NothingMagical < Sinatra::Application
  get '/' do
    erb :home
  end
end

run NothingMagical.new
