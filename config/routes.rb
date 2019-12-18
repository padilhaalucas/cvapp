Rails.application.routes.draw do
  root to: 'pages#home'

  get 'english', to: 'pages#homeen'
  get 'portuguese', to: 'pages#homept'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
