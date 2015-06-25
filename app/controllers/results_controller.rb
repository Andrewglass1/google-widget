class ResultsController < ApplicationController

  def index
    @businesses = BUSINESSES['businesses']
  end

  def show
    @business = BUSINESSES['businesses'].detect{|b|b["slug"] == params[:slug]}
    redirect_to results_path unless @business
  end
end
