Rails.application.routes.draw do
  
  resources :inquries
  resources :orders 
  resources :blogs
  resources :reviews
  resources :caligraphies
  resources :posters
  resources :admins
  resources :customers

  post "/signup", to: "customers#create"
  get "/me", to: "customers#show"
  post "/admin_create", to: "admins#create"
  get "/administration", to: "admins#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
