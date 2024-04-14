class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(time, callback) {
        if (time == undefined || callback == undefined) {
            throw new Error('Отсутствуют обязательные аргументы');
        }

        if (this.alarmCollection.some((elemenArr) => {elemenArr.time == time})) {
            console.warn('Уже присутствует звонок на это же время')
        }
      
        this.alarmCollection.push({callback: callback, time: time, canCall: true})
    }

    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter(function(elemenArr) {
            return !(elemenArr.time == time);
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

        function func() {
            this.alarmCollection.forEach((elemenArr) => {
                if (elemenArr.time == this.getCurrentFormattedTime() && elemenArr.canCall == true) {
                    elemenArr.canCall = false;
                    elemenArr.callback(); 
                } 
            })
        }
        let bindFunc = func.bind(this);

        this.intervalId = setInterval(bindFunc, 1000);
    }

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls() {
        this.alarmCollection.forEach(function(elemenArr) {
            elemenArr.canCall = true;
        })
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}