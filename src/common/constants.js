/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import { Constants } from '@salesforce/scv-connector-base';

export default {
    LOGIN_SUBMIT: 'LOGIN_SUBMIT',
    SHOW_LOGIN_PAGE: 'SHOW_LOGIN_PAGE',
    GET_SHOW_LOGIN_PAGE: 'GET_SHOW_LOGIN_PAGE',
    SET_SHOW_LOGIN_PAGE: 'SET_SHOW_LOGIN_PAGE',
    AGENT_CONFIG: 'AGENT_CONFIG',
    GET_AGENT_CONFIG: 'GET_AGENT_CONFIG',
    SET_AGENT_CONFIG: 'SET_AGENT_CONFIG',
    START_OUTBOUND_CALL: 'START_OUTBOUND_CALL',
    START_INBOUND_CALL: 'START_INBOUND_CALL',
    CONNECT_PARTICIPANT: 'CONNECT_PARTICIPANT',
    REMOVE_PARTICIPANT: 'REMOVE_PARTICIPANT',
    CONNECT_CALL: 'CONNECT_CALL',
    AGENT_HANGUP: 'AGENT_HANGUP',
    END_CALL: 'END_CALL',
    HARDPHONE_EVENT: 'HARDPHONE_EVENT',
    GET_PHONE_CONTACTS: 'GET_PHONE_CONTACTS',
    GET_ACTIVE_CALLS: 'GET_ACTIVE_CALLS',
    ACTIVE_CALLS: 'ACTIVE_CALLS',
    SOFTPHONE_LOGOUT: 'SOFTPHONE_LOGOUT',
    CREATE_TRANSCRIPTION: 'SEND_TRANSCRIPTION',
    INBOUND_CALL_TYPE: 'inbound',
    MESSAGE_FROM_CONNECTOR:'MESSAGE_FROM_CONNECTOR',
    MESSAGE_TO_CONNECTOR:'MESSAGE_TO_CONNECTOR',
    SENDER_TYPE: {
        END_USER: 'END_USER',
        HUMAN_AGENT: 'HUMAN_AGENT',
        VIRTUAL_AGENT: 'VIRTUAL_AGENT'
    },
    PARTICIPANT_TYPE: {
        ...Constants.PARTICIPANT_TYPE
    },
    CALL_CONTROL: {
        ACCEPT_CALL: 'ACCEPT_CALL',
        DECLINE_CALL: 'DECLINE_CALL',
        MUTE: 'MUTE',
        HOLD: 'HOLD',
        SWAP_PARTICIPANTS: 'SWAP_PARTICIPANTS',
        ADD_PARTICIPANT: 'ADD_PARTICIPANT',
        CONFERENCE: 'CONFERENCE',
        RECORD: 'RECORD'
    },
    HANGUP_REASON: {
        PHONE_CALL_ERROR: "error",
        PHONE_CALL_ENDED: "ended"
    },
    SEND_RECORDING: 'SEND_RECORDING',
    LOGIN_RESULT: 'LOGIN_RESULT',
    LOGOUT_RESULT: 'LOGOUT_RESULT',
    CALL_CONNECTED: 'CALL_CONNECTED',
    THROW_ERROR: 'THROW_ERROR',
    ERROR: 'ERROR',
    PARTICIPANT_CONNECTED: 'PARTICIPANT_CONNECTED',
    PARTICIPANT_REMOVED: 'PARTICIPANT_REMOVED',
    MESSAGE: 'MESSAGE',
    REMOTE_CONTROLLER: 'REMOTE_CONTROLLER',
    EVENT_TYPE: { 
        ...Constants.EVENT_TYPE 
    },
    AGENT_ERROR_STATUS: {
        DECLINED_BY_AGENT: "DeclinedByAgent",
        FAILED_TO_CONNECT_AGENT: "FailedToConnectAgent",
        MISSED_BY_AGENT: "MissedByAgent"
    },
    REQUEST_CALLBACK : 'REQUEST_CALLBACK',
    SEND_AUDIO_STATS: 'SEND_AUDIO_STATS'
}
