# 导入urllib库的urlopen函数
import urllib.request
# 发出请求，获取html
user_agent = 'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.9.0.7) Gecko/2009021910 Firefox/3.0.7'
url = "https://wenshu.court.gov.cn"
headers={'User-Agent':user_agent,} 
request = urllib.request.Request(url,None,headers)
# 获取的html内容是字节，将其转化为字符串
response = urllib.request.urlopen(request)
# 打印html内容
print(response.read())


# 下载api：https://wenshu.court.gov.cn/down/one?docId=e61626b12bdb43969c2aae680069b438


