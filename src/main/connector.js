/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

/** 
 * Salesforce Service Cloud Voice Demo Connector
 * @author dlouvton
 */

/** @module connector **/
import { Constants, VendorConnector } from '@salesforce/scv-connector-base';
import { Sdk } from './vendor-sdk';
/** 
 * Class representing a Service Cloud Voice Demo Connector
 */
export class Connector extends VendorConnector {
    /**
     * Create a Connector instance.
     * @param {object} sdk - Telephony SDK
     */
    constructor(state) {
        super();
        this.sdk = new Sdk(state);
        console.log("connector(state): ", state);
    }
    /**
     * Called by SFDC to initialize the connector
     * @param {object} callCenterConfig - SFDC Contact Center Settings
     */
    init(callCenterConfig) {
        console.log("connector(callCenterConfig): ", callCenterConfig);
        return this.sdk.init(callCenterConfig);
    }

    /**
     * Called when the connector is loaded, to request the active calls
     */
    getActiveCalls() {
        console.log("getActiveCalls");
        return this.sdk.getActiveCalls();
    }
    /**
     * Called when call is accepted on the omni widget
     * @param {PhoneCall} call
     */
    acceptCall(call) {
        console.log("connector(acceptcall -> call): ", call);
        return this.sdk.acceptCall(call);
    }
    /**
     * Called when call is declined
     * @param {PhoneCall} call
     */
    declineCall(call) {
        // TODO: Update core to pass call on declineCall
        console.log("connector(declineCall -> call): ", call);
        return this.sdk.declineCall(call ? call : { callAttributes: { participantType: Constants.PARTICIPANT_TYPE.INITIAL_CALLER }});
    }
    /**
     * Called when agent hangs up or when a participant (customer or third party) is
     * removed by the agent.
     * @param {PhoneCall} call
     * @param {string} agentStatus
     */
    endCall(call, agentStatus) {
        console.log("connector(endCall -> call): ", call);
        console.log("connector(endCall -> agentStatus): ", agentStatus);
        return this.sdk.endCall(call, agentStatus);
    }
    /**
     * Called when call is muted from the sfdc call controls
     */
    mute() {
        console.log("connector -> mute clicked");
        return this.sdk.mute();
    }
    /**
     * Called when call is unmuted from the sfdc call controls
     */
    unmute() {
        console.log("connector -> unmute clicked");
        return this.sdk.unmute()
    }
    /**
     * Called when customer/third party call is put on hold by the agent
     * @param {PhoneCall} call call
     */
    hold(call) {
        console.log("connector(hold -> call): ", call);
        return this.sdk.hold(call)
    }
    /**
     * Called when call is resumed (off hold for either customer/third party) from
     * the sfdc call controls
     * @param {PhoneCall} call call
     */
    resume(call) {
        console.log("connector(resume -> call): ", call);
        return this.sdk.resume(call);
    }
    /**
     * Called when recording is paused from the sfdc call controls
     * @param {PhoneCall} call
     */
    pauseRecording(call) {
        console.log("connector(pauseRecording -> call): ", call);
        return this.sdk.pauseRecording(call);
    }
    /**
     * Called when recording is resumed from the sfdc call controls
     * @param {PhoneCall} call
     */
    resumeRecording(call) {
        console.log("connector(resumeRecording -> call): ", call);
        return this.sdk.resumeRecording(call);
    }
    /**
     * Called when participants on a call are swapped
     * @param {PhoneCall} call1 first call to be swapped
     * @param {PhoneCall} call2 second call to be swapped
     */
    swap(call1, call2) {
        console.log("connector(swap -> call1): ", call1);
        console.log("connector(swap -> call2): ", call2);
        return this.sdk.swapCalls(call1, call2);
    }
    /**
     * Called when participants are joined for a conference
     * @param {PhoneCall[]} calls
     */
    conference(calls) {
        console.log("connector(conference -> calls): ", calls);
        return this.sdk.conference(calls);
    }
    /**
     * Called when agent sets their status/presence (i.e. when changing from
     * Available to Offline) 
     * @param {string} agentStatus agent status, Constants.AGENT_STATUS.ONLINE or Constants.AGENT_STATUS.OFFLINE
     * @param {AgentStatusInfo} agentStatusInfo object contains statusId, statusApiName and statusName
     * @param {boolean} enqueueNextState true if the state should be enqueued, which will update the agent's status after a call ends
     */
    setAgentStatus(agentStatus, agentStatusInfo, enqueueNextState) {
        console.log("connector(setAgentStatus -> agentStatus): ", agentStatus);
        console.log("connector(setAgentStatus -> agentStatusInfo): ", agentStatusInfo);
        console.log("connector(setAgentStatus -> enqueueNextState): ", enqueueNextState);
        return this.sdk.setAgentStatus(agentStatus, agentStatusInfo, enqueueNextState)
    }
    /**
     * Called when an outbound call is made 
     * @param {Contact} contact
     */
    dial(contact) {
        console.log("connector(dial -> contact): ", contact);
        return this.sdk.dial(contact);
    }
    /**
     * Called when an agent sends digits on the existing call @digits: a string of
     * digits to send to the existing connected call.
     * @param {string} digits digits
     */
    sendDigits(digits) {
        console.log("connector(sendDigits -> digits): ", digits);
        return this.sdk.sendDigits(digits);
    }
    /**
     * Called when speed dial is clicked in order to request the vendor to get the agent phone contacts
     * @param {Object} filter
     */
    getPhoneContacts(filter) {
        console.log("connector(getPhoneContacts -> filter): ", filter);
        return this.sdk.getPhoneContacts(filter);
    }
    /**
     * add participant to the call through either an address or a free form Phone Number.
     * @param {Contact} contact
     * @param {PhoneCall} call
     */
    addParticipant(contact, call, isBlindTransfer) {
        console.log("connector(addParticipant -> contact): ", contact);
        console.log("connector(addParticipant -> call): ", call);
        console.log("connector(addParticipant -> isBlindTransfer): ", isBlindTransfer);
        return this.sdk.addParticipant(contact, call, isBlindTransfer);
    }
    /**
     * logout from the telephony system.
     */
    logout() {
        console.log("connector -> logout");
        return this.sdk.omniLogout();
    }
     /**
     * Dispatch an event to Remote Control.
     * @param {string} eventType Event Type
     * @param {object} payload Payload
     */
    dispatchEventToRemote(eventType, payload) {
        console.log("connector(dispatchEventToRemote -> eventType): ", eventType);
        console.log("connector(dispatchEventToRemote -> payload): ", payload);
        const requestBroadcastChannel = new BroadcastChannel('rc-request');
        requestBroadcastChannel.postMessage({type: eventType, payload});
    }
    /**
     * Called when connector is ready to get the agent configuration
     */
    getAgentConfig() {
        var getAgentConfiguration = this.sdk.getAgentConfig();
        console.log("connector(getAgentConfig): ", getAgentConfiguration);
        return getAgentConfiguration;
    }

    /**
    * Used to set the agent config, including the selected phone type and number
    */
    setAgentConfig(config) {
        console.log("connector(setAgentConfig -> config): ", config);
        return this.sdk.setAgentConfig(config);
    }

    /**
     * Called when connector is ready to get the vendor or agent capabilities
     */
    getCapabilities() {
        var getCapabilities = this.sdk.getCapabilities();
        console.log("connector(getCapabilities): ", getCapabilities);
        return getCapabilities;
    }
    
    /**
    * Used to set the vendor or agent capabilities
    */
    setCapabilities(capabilities) {
        var setCapabilities = this.sdk.setCapabilities(capabilities);
        console.log("connector(setCapabilities): ", setCapabilities);
        return setCapabilities;
    }

    /**
    * Used to finish wrap-up
    */
    wrapUpCall() {
        console.log("connector(wrapUpCall)");
        this.sdk.endWrapup();
    }

    /**
    * Delegate Message received from sfdc component to sdk
    * @param {object} message - Message
    */
    handleMessage(message) {
        console.log("connector(handleMessage -> message): ", message);
        this.sdk.handleMessage(message);
        // dispatchEventToRemote is only for demo purposes
        this.dispatchEventToRemote(Constants.EVENT_TYPE.MESSAGE, message);
    }

    /**
     * Get the signed recording url
     * @param {String} recordingUrl
     * @param {String} vendorCallKey
     * @param {String} callId
     * @returns {Promise<SignedRecordingUrlResult>} 
     */
    getSignedRecordingUrl(recordingUrl, vendorCallKey, callId) {
        console.log("connector(getSignedRecordingUrl -> recordingUrl): ", recordingUrl);
        console.log("connector(getSignedRecordingUrl -> vendorCallKey): ", vendorCallKey);
        console.log("connector(getSignedRecordingUrl -> callId): ", callId);
        return this.sdk.getSignedRecordingUrl(recordingUrl, vendorCallKey, callId);
    }

    superviseCall(parentCall){
        console.log("superviseCall", parentCall);
        return this.sdk.superviseCall(parentCall);  
    }

    supervisorDisconnect(parentCall){
        console.log("supervisorDisconnect", parentCall); 
        return this.sdk.supervisorDisconnect(parentCall);
    }

    supervisorBargeIn(parentCall){
        console.log("supervisorBargeIn", parentCall); 
        return this.sdk.supervisorBargeIn(parentCall);
    }
}
