module.exports = class FileSettings {
    constructor() {
        this.debug = {
            textColor: "#155724", 
            backgroundColor: "#d4edda",
            pattern: "[DEBUG]"
        };

        this.info = {
            textColor: "#000000", 
            backgroundColor: "#ffffff",
            pattern: "[INFO]"
        };

        this.warning = {
            textColor: "#856404", 
            backgroundColor: "#ffc107",
            pattern: "[WARN]"
        };

        this.error = {
            textColor: "#721c24", 
            backgroundColor: "#ff5252",
            pattern: "[ERROR]"
        };

        this.fatal = {
            textColor: "#721c24", 
            backgroundColor: "#ff5252",
            pattern: "[FATAL]"
        };
    }

    static createFromSettings(settings) {
        return Object.assign(new FileSettings(), settings);
    }

    defaultLogLevel() {
        return this.info;
    }

    getSeveritySettings(line) {
        if (line.includes(this.fatal.pattern)) {
            return this.fatal;
        }
        else if (line.includes(this.error.pattern)) {
            return this.error;
        }
        else if (line.includes(this.warning.pattern)) {
            return this.warning;
        }
        else if (line.includes(this.info.pattern)) {
            return this.info;
        }
        else if (line.includes(this.debug.pattern)) {
            return this.debug;
        }
        else {
            return null;
        }
    }

    changeTextColor(severity, textColor) {
        this[severity.toLowerCase()].textColor = textColor;
    }

    changeBackgroundColor(severity, backgroundColor) {
        this[severity.toLowerCase()].backgroundColor = backgroundColor;
    }

    changePattern(severity, pattern) {
        this[severity.toLowerCase()].pattern = pattern;
    }
}