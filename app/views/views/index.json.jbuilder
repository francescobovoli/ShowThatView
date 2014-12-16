json.array!(@views) do |view|
  json.extract! view, :id, :address, :floor, :direction
  json.url view_url(view, format: :json)
end
