require 'video_info'
require 'mongo'
require 'pp'

client = Mongo::Client.new('mongodb://admin:talkie$treet@ds031842.mongolab.com:31842/talkiestreet')

fileName = ARGV[0]

File.readlines(fileName).each do |line|

 values = line.split(",")
 url = values[0]
 language = values[1]
 category = values[2]

 #puts url, language, category 
 video = VideoInfo.new(url)

 url = video.embed_url

 if url.start_with?('http') === false
   url = 'https:' + url
 end

 result = client[:movies].insert_many([
   { :videoId => video.video_id,
     :language => language,
     :genre => [category],
     :title => video.title,
     :provider => video.provider,
     :description => video.description,
     :duration => video.duration,
     :thumbnail_small => video.thumbnail_small,
     :thumbnail_medium => video.thumbnail_medium,
     :embed_url => url
   }
 ])

 result.n

end
