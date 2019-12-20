Rails.application.routes.draw do
  root to: 'pages#home'

  get 'english', to: 'pages#homeen'
  get 'portuguese', to: 'pages#homept'
  get 'download_pt', to: 'downloads#download_cv_pt'
  get 'download_en', to: 'downloads#download_cv_en'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
