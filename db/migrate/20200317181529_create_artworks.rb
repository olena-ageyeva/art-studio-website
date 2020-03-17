class CreateArtworks < ActiveRecord::Migration[5.2]
  def change
    create_table :artworks do |t|
        t.string :author
        t.string :description
        t.string :icon
        t.string :url
        t.string :title
        t.string :photo_id
        t.timestamps
    end
  end
end
