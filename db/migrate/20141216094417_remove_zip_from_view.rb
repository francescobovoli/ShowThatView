class RemoveZipFromView < ActiveRecord::Migration
  def change
    remove_column :views, :zip
  end
end
