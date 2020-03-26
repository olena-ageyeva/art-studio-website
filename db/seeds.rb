# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

DATA = {
  :artwork_keys =>
    ["author", "description", "icon", "url", "title", "photo_id" ],
  :artworks => [
    ["Vika G", "Fishes","https://farm8.staticflickr.com/7572/29690600402_611a51a68e_m.jpg" ,"https://farm8.staticflickr.com/7572/29690600402_8a736d39d1_o.jpg" ,"Vika G","29690600402"],
    ["Sonya", "Birds", "https://farm9.staticflickr.com/8262/29177668113_08db9c1156_m.jpg","https://farm9.staticflickr.com/8262/29177668113_b18eb6d5c6_o.jpg"  ,"Alex P","29177668113"],
    ["Asya", "Fall", "https://farm9.staticflickr.com/8449/29690599232_b4010f31c4_m.jpg","https://farm9.staticflickr.com/8449/29690599232_0e2e3bbd91_o.jpg","Sonia R","29690599232"],
    ["Sofia", "Winter","https://farm9.staticflickr.com/8313/29803367685_cfda6ca216_m.jpg","https://farm9.staticflickr.com/8313/29803367685_33099980cf_o.jpg","Sofia S","29803367685"],
    ["Sofia", "Winter","https://farm9.staticflickr.com/8414/29767706316_721863ef3f_m.jpg","https://farm9.staticflickr.com/8414/29767706316_2fb6cc3bba_o.jpg","Asya L","29767706316"],
    ["Sofia", "Winter","https://farm9.staticflickr.com/8082/29767705706_e90cd3e5c3_m.jpg","https://farm9.staticflickr.com/8082/29767705706_db0426fd33_o.jpg","Kirill","29767705706"],
    ["Sofia", "Winter","https://farm9.staticflickr.com/8377/29690826762_9567995851_m.jpg","https://farm9.staticflickr.com/8377/29690826762_82f9b91913_o.jpg","Asya L","29690826762"],
    ["Sofia", "Winter","https://farm9.staticflickr.com/8394/29175972754_d1f8ac72b0_m.jpg","https://farm9.staticflickr.com/8394/29175972754_b101432e06_o.jpg","Alex P","29175972754"],
    ["Sofia", "Winter","https://farm9.staticflickr.com/8560/29690826482_d53bbbf827_m.jpg","https://farm9.staticflickr.com/8560/29690826482_66fffd0792_o.jpg","Sonya R","29690826482"],
  ],
  :user_keys =>
  ["username", "password_digest"],
  :users=>[
    ["info@info.com", "password"],
    ["admin@admin.com", "password"]
  ]

}

def main
  make_artworks
  make_users
end

def make_artworks
  DATA[:artworks].each do |artwork|
    new_artwork = Artwork.new
    artwork.each_with_index do |attribute, i|
      new_artwork.send(DATA[:artwork_keys][i]+"=", attribute)
    end
    new_artwork.save
  end
end

def make_users
  DATA[:users].each do |user|
    new_user = User.new
    user.each_with_index do |attribute, i|
      new_user.send(DATA[:user_keys][i]+"=", attribute)
    end
    new_user.save
  end
end






main

