library(googlesheets)
library(dplyr)
library(jsonlite)

zakonodarci <- gs_title("zakonodarci a hesla")

snemovna <- zakonodarci %>%
  gs_read("Sněmovna")

toJSON(snemovna[,c(1,2,3,5,6,7,8,9)])


snemovna <- zakonodarci %>%
  gs_read("Sněmovna")
