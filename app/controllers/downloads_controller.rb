class DownloadsController < ApplicationController
  def download_cv_en
    send_file "#{Rails.root}/app/assets/docs/CVLucasENfev2020.pdf", type: "application/pdf", x_sendfile: true
  end

  def download_cv_pt
    send_file "#{Rails.root}/app/assets/docs/CVLucasPTfev2020.pdf", type: "application/pdf", x_sendfile: true
  end
end
