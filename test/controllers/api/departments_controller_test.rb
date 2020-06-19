require 'test_helper'

class Api::DepartmentsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_departments_index_url
    assert_response :success
  end

  test "should get show" do
    get api_departments_show_url
    assert_response :success
  end

end
