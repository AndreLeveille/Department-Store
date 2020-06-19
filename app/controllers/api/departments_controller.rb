class Api::DepartmentsController < ApplicationController
  def index
    render json: Department.all
  end

  def show
    department = Department.find(params[:id])
    render json: department
    # render json: { department: department, items: department.items }
  end
end
