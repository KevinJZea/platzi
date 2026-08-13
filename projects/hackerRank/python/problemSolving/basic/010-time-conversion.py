"""

Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

Example

s = '12:01:00PM'

Return '12:01:00'.

s = '12:01:00AM'

Return '00:01:00'.

"""

def timeConversion(s):
    timeMeridien = s[-2:]
    isAM = timeMeridien == "AM"
    hour = int(s[:2])
    isTwelve = hour == 12
    
    if not isTwelve:
        if isAM:
            return s[:-2]
    
        if not isAM:
            convertedHour = hour + 12
            return f'{convertedHour}{s[2:-2]}'
    
    convertedHour = '00' if isAM else '12'
    return f'{convertedHour}{s[2:-2]}'

timeConversion("07:05:45PM") # 19:05:45
