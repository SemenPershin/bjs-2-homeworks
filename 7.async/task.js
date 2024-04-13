class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(time, callback) {
        if (time == undefined || callback == undefined) {
            throw new Error('Отсутствуют обязательные аргументы');
        }

        for (let i in this.alarmCollection) {
            if (this.alarmCollection[i]['time'] == time) {
                console.warn('Уже присутствует звонок на это же время');
            }
        }

        this.alarmCollection.push({callback: callback, time: time, canCall: true})
    }

    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter(function(i) {
            if (i["time"] == time) {
                return false;
            } else {
                return true;
            }
        } )
    }

    getCurrentFormattedTime() {
        let date = new Date;
        let hour = date.getHours();
        let minute = date.getMinutes();

        if (String(minute).length == 1) {
            minute = "0" + minute;
        }
        if (String(hour).length == 1) {
            hour = "0" + hour;
        }
        return hour + ":" + minute;
    }

    start() {
        if (this.intervalId != null) {
            return;
        }

        let that = this;
        
        this.intervalId = setInterval(function() {
            that.alarmCollection.forEach((element) => {
                if (element["time"] == that.getCurrentFormattedTime() && element["canCall"] == true) {
                    element["canCall"] = false;
                    element["callback"](); 
                } 
            })
        }, 1000)
    }

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls() {
        this.alarmCollection.forEach(function(i) {
            i["canCall"] = true;
        })
    }

    clearAlarms() {
        this.stop;
        this.alarmCollection = [];
        this.intervalId = null;
    }
}