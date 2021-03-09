Rails.application.routes.draw do
  root to: 'home#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get '/show',  to: 'home#show'
  get '/chart', to: 'home#chart'
  get '/component', to: 'home#component'
end
