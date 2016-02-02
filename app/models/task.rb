class Task < ActiveRecord::Base
  attr_accessible :actual_hrs, :eta_hrs, :parent_id, :project, :status, :task_name, :task_type
end
