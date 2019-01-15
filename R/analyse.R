library(googlesheets)
library(dplyr)
library(jsonlite)

zakonodarci <- gs_title("zakonodarci a hesla")

snemovna <- zakonodarci %>%
  gs_read("Sněmovna")

snemovna$f <- basename(snemovna$f)

toJSON(snemovna[,c(1,2,3,5,6,7,8,9)])

senat <- zakonodarci %>%
  gs_read("Senát")

senat$f <- basename(senat$f)

toJSON(senat[,-4])


for (i in snemovna$f) {
  download.file(i, paste0("./../img/", basename(i)))
}


for (i in senat$f) {
  download.file(i, paste0("./../img/", basename(i)))
}
