require 'yaml'
BUSINESSES = YAML.load_file("#{Rails.root}/config/data/businesses.yml")
