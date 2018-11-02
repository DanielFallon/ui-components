import moment from 'moment';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DatePicker as AntDatePicker } from 'antd';
import './DateRange.scss';

export default class DateRange extends Component {
  static propTypes = {
    placeholder: PropTypes.string,
    startLabel: PropTypes.string,
    endLabel: PropTypes.string,
    format: PropTypes.string,
    boundStartDateValue: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ]),
    boundEndDateValue: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ]),
    datepickerStartChangeFn: PropTypes.func,
    datepickerEndChangeFn: PropTypes.func
  }

  constructor(props) {
    super(props);

    this.state = {
      startValue: props.boundStartDateValue ? moment(props.boundStartDateValue) : null,
      endValue: props.boundEndDateValue ? moment(props.boundEndDateValue) : null,
      endOpen: false
    };
  }

  disabledStartDate = (startValue) => {
    const endValue = this.state.endValue;
    if (!startValue || !endValue) {
      return false;
    }
    return startValue.valueOf() > endValue.valueOf();
  }

  disabledEndDate = (endValue) => {
    const startValue = this.state.startValue;
    if (!endValue || !startValue) {
      return false;
    }
    return endValue.valueOf() <= startValue.valueOf();
  }

  onChange = (field, value) => {
    this.setState({
      [field]: value
    });
  }

  onStartChange = (value) => {
    this.onChange('startValue', value);
  }

  onEndChange = (value) => {
    this.onChange('endValue', value);
  }

  handleStartOpenChange = (open) => {
    if (!open) {
      this.setState({ endOpen: true });
    }
  }

  handleEndOpenChange = (open) => {
    this.setState({ endOpen: open });
  }

  render() {
    const {
      placeholder = 'MM/DD/YYYY',
      startLabel,
      endLabel,
      format = 'MM/DD/YYYY',
      datepickerStartChangeFn,
      datepickerEndChangeFn,
      boundStartDateValue,
      boundEndDateValue
    } = this.props;

    let { startValue, endValue } = this.state;

    const calendarIcon = (
      <i className='material-icons'>
        calendar_today
      </i>
    );

    return (
      <div className='date-range flex'>
        <div className='ant-form-vertical'>
          {startLabel &&
            <div className='ant-form-item-label'>
              <label title={startLabel}>{startLabel}</label>
            </div>
          }
          <AntDatePicker
            placeholder={placeholder}
            className='start-date'
            disabledDate={this.disabledStartDate}
            format={format}
            value={startValue}
            onChange={(value) => {
              this.onStartChange(value);
              datepickerStartChangeFn(value);
            }}
            onOpenChange={this.handleStartOpenChange}
            suffixIcon={calendarIcon}
            boundStartDateValue={boundStartDateValue}
          />
        </div>
        <div className='ant-form-vertical'>
          {endLabel &&
            <div className='ant-form-item-label'>
              <label title={endLabel}>{endLabel}</label>
            </div>
          }
          <AntDatePicker
            placeholder={placeholder}
            className='end-date'
            disabledDate={this.disabledEndDate}
            format={format}
            value={endValue}
            onChange={(value) => {
              this.onEndChange(value);
              datepickerEndChangeFn(value);
            }}
            open={this.state.endOpen}
            onOpenChange={this.handleEndOpenChange}
            suffixIcon={calendarIcon}
            boundEndDateValue={boundEndDateValue}
          />
        </div>
      </div>
    );
  }
};
