Rails.application.routes.draw do

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html


    scope '/api' do
      get :artworks, to: 'artworks#index'
      resources :artworks
      resource :users, only: [:create]
      resources :users
      post "/login", to: "auth#login"
      get "/auto_login", to: "auth#auto_login"
      get "/user_is_authed", to: "auth#user_is_authed"
    end

end

