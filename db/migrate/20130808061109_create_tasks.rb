class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.string :task_name
      t.string :project
      t.string :task_type
      t.float :eta_hrs
      t.float :actual_hrs
      t.string :status
      t.integer :parent_id

      t.timestamps
    end
  end
end
