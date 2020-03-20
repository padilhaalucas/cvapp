class DownloadsController < ApplicationController
  def download_cv_en
    send_file "#{Rails.root}/app/assets/docs/CVLucasEN2020.pdf", type: "application/pdf", x_sendfile: true
  end

  def download_cv_pt
    send_file "#{Rails.root}/app/assets/docs/CVLucasPT2020.pdf", type: "application/pdf", x_sendfile: true
  end
end
