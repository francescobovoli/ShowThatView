class CreateViews < ActiveRecord::Migration
  def change
    create_table :views do |t|
      t.string :zip
      t.decimal :floor
      t.decimal :direction

      t.timestamps
    end
  end
end
