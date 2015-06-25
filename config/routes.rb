Rails.application.routes.draw do
  root 'results#index'
  resources :results, param: :slug, only: [:show, :index]
end
