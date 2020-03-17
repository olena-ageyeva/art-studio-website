require 'rails_helper'

describe Artwork do
    it 'can be created' do
      artwork = Artwork.create!(title: "My title", description: "The art description", author: "John Smith")
      expect(artwork).to be_valid
    end
  end