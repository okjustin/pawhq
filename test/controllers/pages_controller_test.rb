require "test_helper"

class PagesControllerTest < ActionDispatch::IntegrationTest
  include Devise::Test::IntegrationHelpers

  def setup
    sign_in FactoryBot.create(:user)
  end

  test "should get home" do
    get root_url
    assert_response :success
  end

  test "should get up" do
    get up_url
    assert_response :success
  end
end
