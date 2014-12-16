class AddAddressToView < ActiveRecord::Migration
  def change
    add_column :views, :address, :string
  end
end
