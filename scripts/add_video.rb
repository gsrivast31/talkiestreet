require 'video_info'
require 'mongo'
require 'pp'

client = Mongo::Client.new('mongodb://admin:talkie$treet@ds031842.mongolab.com:31842/talkiestreet')

video = VideoInfo.new("https://www.youtube.com/watch?v=mZqGqE0D0n4")

url = video.embed_url

if url.start_with?('http') === false
  url = 'https:' + url
end

result = client[:movies].insert_many([
  { :videoId => video.video_id,
    :language => 'English',
    :genre => ['Travel'],
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
