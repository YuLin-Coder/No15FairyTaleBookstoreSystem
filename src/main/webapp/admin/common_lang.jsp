<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
</head>
		<input type="hidden" id="uncommitted" name="uncommitted" value = "<spring:message code='msg.user.uncommitted'/>"/>
		<input type="hidden" id="pending" name="pending" value = "<spring:message code='msg.user.pending'/>"/>
		<input type="hidden" id="suspended" name="suspended" value = "<spring:message code='msg.user.suspended'/>"/>
		<input type="hidden" id="reAuditMsg" name="reAuditMsg" value = "<spring:message code='msg.user.re.audit'/>"/>
		<input type="hidden" id="rejected" name="rejected" value = "<spring:message code='msg.user.rejected'/>"/>
		<input type="hidden" id="passed" name="passed" value = "<spring:message code='msg.user.passed'/>"/>
		<input type="hidden" id="viewAccount" name="viewAccount" value = "<spring:message code='msg.user.view.account'/>"/>
		<input type="hidden" id="client" name="client" value = "<spring:message code='msg.client'/>"/>
		<input type="hidden" id="ib" name="ib" value = "<spring:message code='msg.ib'/>"/>
		<input type="hidden" id="startLtEndNumber" name="startLtEndNumber" value = "<spring:message code='msg.start.login.number.lt.end.number'/>"/>
		<input type="hidden" id="minLoginNumber" name="minLoginNumber" value = "<spring:message code='msg.please.enter.min.login.number'/>"/>
		<input type="hidden" id="maxLoginNumber" name="maxLoginNumber" value = "<spring:message code='msg.please.enter.max.login.number'/>"/>
		<input type="hidden" id="startTimeLtEndTime" name="startTimeLtEndTime" value = "<spring:message code='msg.start.time.lt.end.time'/>"/>
		<input type="hidden" id="pleaseDate" name="pleaseDate" value = "<spring:message code='msg.please.date'/>"/>
		<input type="hidden" id="hint" name="hint" value = "<spring:message code='msg.hint'/>"/>
		<input type="hidden" id="confirm" name="confirm" value = "<spring:message code='msg.confirm'/>"/>
		<input type="hidden" id="downloadMsg" name="downloadMsg" value = "<spring:message code='msg.download'/>"/>
		<input type="hidden" id="cancelMsg" name="cancelMsg" value = "<spring:message code='msg.cancel'/>"/>
		<input type="hidden" id="pleaseEndTimeMsg" name="pleaseEndTimeMsg" value = "<spring:message code='msg.please.enter.end.time'/>"/>
		<input type="hidden" id="confirmDownloadContentMsg" name="confirmDownloadContentMsg" value = "<spring:message code='msg.confirm.download.content'/>"/>
		<input type="hidden" id="processingMsg" name="processingMsg" value = "<spring:message code='msg.processing'/>"/>
		<input type="hidden" id="pageDisplaysMsg" name="pageDisplaysMsg" value = "<spring:message code='msg.each.page.displays'/>"/>
		<input type="hidden" id="recordsMsg" name="recordsMsg" value = "<spring:message code='msg.records'/>"/>
		<input type="hidden" id="entriesMsg" name="entriesMsg" value = "<spring:message code='msg.entries'/>"/>
		<input type="hidden" id="currentDisplayMsg" name="currentDisplayMsg" value = "<spring:message code='msg.current.display'/>"/>
		<input type="hidden" id="toMsg" name="toMsg" value = "<spring:message code='msg.to'/>"/>
		<input type="hidden" id="totalOfMsg" name="totalOfMsg" value = "<spring:message code='msg.total.of'/>"/>
		<input type="hidden" id="previousMsg" name="previousMsg" value = "<spring:message code='msg.previous.page'/>"/>
		<input type="hidden" id="nextMsg" name="nextMsg" value = "<spring:message code='msg.next.page'/>"/>
		<input type="hidden" id="enptyTableMsg" name="enptyTableMsg" value = "<spring:message code='msg.empty.table'/>"/>
		<input type="hidden" id="cannotQueriedMsg" name="cannotQueriedMsg" value = "<spring:message code='msg.cannot.queried'/>"/>
		<input type="hidden" id="infoEmptyMsg" name="infoEmptyMsg" value = "<spring:message code='msg.info.empty'/>"/>
		<input type="hidden" id="infoFilteredMsg" name="infoFilteredMsg" value = "<spring:message code='msg.info.filtered'/>"/>
		<input type="hidden" id="mainMsg" name="mainMsg" value = "<spring:message code='msg.main'/>"/>
		<input type="hidden" id="lastMsg" name="lastMsg" value = "<spring:message code='msg.last'/>"/>

		<input type="hidden" id="workbenchMsg" name="workbenchMsg" value = "<spring:message code='msg.workbench'/>"/>
		<input type="hidden" id="statisticsMsg" name="statisticsMsg" value = "<spring:message code='msg.statistics'/>"/>
		<input type="hidden" id="customerRegisterDataMsg" name="customerRegisterDataMsg" value = "<spring:message code='msg.customer.register.data'/>"/>
		<input type="hidden" id="timeMsg" name="timeMsg" value = "<spring:message code='msg.time'/>"/>
		<input type="hidden" id="addUserMsg" name="addUserMsg" value = "<spring:message code='msg.add.user'/>"/>
		<input type="hidden" id="submitRegisterMsg" name="submitRegisterMsg" value = "<spring:message code='msg.submit.register'/>"/>
		<input type="hidden" id="resubmitMsg" name="resubmitMsg" value = "<spring:message code='msg.re.submit'/>"/>
		<input type="hidden" id="oldUserFirstLoginMsg" name="oldUserFirstLoginMsg" value = "<spring:message code='msg.old.user.first.login'/>"/>
		<input type="hidden" id="customerDepositDataMsg" name="customerDepositDataMsg" value = "<spring:message code='msg.customer.deposit.data'/>"/>
		<input type="hidden" id="totalMsg" name="totalMsg" value = "<spring:message code='msg.total'/>"/>
		<input type="hidden" id="payFailMsg" name="payFailMsg" value = "<spring:message code='msg.pay.fail'/>"/>
		<input type="hidden" id="depositSuccessMsg" name="depositSuccessMsg" value = "<spring:message code='msg.deposit.success'/>"/>
		<input type="hidden" id="otherMsg" name="otherMsg" value = "<spring:message code='msg.other'/>"/>
		<input type="hidden" id="customerTradeDataMsg" name="customerTradeDataMsg" value = "<spring:message code='msg.customer.trade.data'/>"/>
		<input type="hidden" id="cpaPatternMsg" name="cpaPatternMsg" value = "<spring:message code='msg.cpa.pattern'/>"/>
		<input type="hidden" id="ibPatternMsg" name="ibPatternMsg" value = "<spring:message code='msg.ib.pattern'/>"/>
		<input type="hidden" id="mixedPatternMsg" name="mixedPatternMsg" value = "<spring:message code='msg.mixed.pattern'/>"/>

		<input type="hidden" id="resetMsg" name="resetMsg" value = "<spring:message code='msg.reset'/>"/>
		<input type="hidden" id="recordTimeMsg" name="recordTimeMsg" value = "<spring:message code='msg.record_time'/>"/>
		<input type="hidden" id="newStatusMsg" name="newStatusMsg" value = "<spring:message code='msg.new.status'/>"/>
		<input type="hidden" id="depositAmountMsg" name="depositAmountMsg" value = "<spring:message code='msg.deposit_amount'/>"/>
		<input type="hidden" id="nameMsg" name="nameMsg" value = "<spring:message code='msg.name'/>"/>
		<input type="hidden" id="countryMsg" name="countryMsg" value = "<spring:message code='msg.country'/>"/>

		<input type="hidden" id="preOrderFailMsg" name="preOrderFailMsg" value = "<spring:message code='msg.pre.order.fail'/>"/>
		<input type="hidden" id="toBePaidMsg" name="toBePaidMsg" value = "<spring:message code='msg.tobe.paid'/>"/>
		<input type="hidden" id="toThirdPartyMsg" name="toThirdPartyMsg" value = "<spring:message code='msg.submit.to.third.party'/>"/>
		<input type="hidden" id="prePaymentFailedMsg" name="prePaymentFailedMsg" value = "<spring:message code='msg.prepayment.failed'/>"/>
		<input type="hidden" id="depositProcessingMsg" name="depositProcessingMsg" value = "<spring:message code='msg.deposit.processing'/>"/>
		<input type="hidden" id="paySuccessMsg" name="paySuccessMsg" value = "<spring:message code='msg.pay.success'/>"/>
		<input type="hidden" id="crmNoticFailMsg" name="crmNoticFailMsg" value = "<spring:message code='msg.pay.success.crm.fail'/>"/>
		<input type="hidden" id="processing2Msg" name="processing2Msg" value = "<spring:message code='msg.processing2'/>"/>
		<input type="hidden" id="yesMsg" name="yesMsg" value = "<spring:message code='msg.yes'/>"/>
		<input type="hidden" id="noMsg" name="noMsg" value = "<spring:message code='msg.no'/>"/>
		<input type="hidden" id="unprocessedMsg" name="unprocessedMsg" value = "<spring:message code='msg.unprocessed'/>"/>
		<input type="hidden" id="processedMsg" name="processedMsg" value = "<spring:message code='msg.processed'/>"/>
		<input type="hidden" id="selectMsg" name="selectMsg" value = "<spring:message code='msg.select'/>"/>
		<input type="hidden" id="stateMsg" name="stateMsg" value = "<spring:message code='msg.state'/>"/>
		<input type="hidden" id="unansweredMsg" name="unansweredMsg" value = "<spring:message code='msg.unanswered'/>"/>
		<input type="hidden" id="recoveredMsg" name="recoveredMsg" value = "<spring:message code='msg.recovered'/>"/>
		<input type="hidden" id="operationSuccMsg" name="operationSuccMsg" value = "<spring:message code='msg.operation.success'/>"/>
		<input type="hidden" id="operationErrorMsg" name="operationErrorMsg" value = "<spring:message code='msg.operation.error'/>"/>
		<input type="hidden" id="operationMsg" name="operationMsg" value = "<spring:message code='msg.operation'/>"/>
		<input type="hidden" id="areYouSuccessMsg" name="areYouSuccessMsg" value = "<spring:message code='msg.are.you.succcess'/>"/>
		<input type="hidden" id="completeMsg" name="completeMsg" value = "<spring:message code='msg.complete'/>"/>

		<input type="hidden" id="commandCreateCode" name="commandCreateCode" value = "<spring:message code='command.create.code'/>"/>
		<input type="hidden" id="commandMarketExecution" name="commandMarketExecution" value = "<spring:message code='command.market.execution'/>"/>
		<input type="hidden" id="commandPedingOrder" name="commandPedingOrder" value = "<spring:message code='command.peding.order'/>"/>
		<input type="hidden" id="commandNormal" name="commandNormal" value = "<spring:message code='command.normal'/>"/>
		<input type="hidden" id="commandExpiration" name="commandExpiration" value = "<spring:message code='command.expiration'/>"/>
		<input type="hidden" id="commandCategoryNotEmpty" name="commandCategoryNotEmpty" value = "<spring:message code='command.category.not.empty'/>"/>
		<input type="hidden" id="commandTradeNotEmpty" name="commandTradeNotEmpty" value = "<spring:message code='command.trade.not.empty'/>"/>
		<input type="hidden" id="commandSymbolNotEmpty" name="commandSymbolNotEmpty" value = "<spring:message code='command.symbol.not.empty'/>"/>
		<input type="hidden" id="commandPriceNotEmpty" name="commandPriceNotEmpty" value = "<spring:message code='command.price.not.empty'/>"/>
		<input type="hidden" id="commandPriceNumber" name="commandPriceNumber" value = "<spring:message code='command.price.number'/>"/>
		<input type="hidden" id="commandVolumeNotEmpty" name="commandVolumeNotEmpty" value = "<spring:message code='command.volume.not.empty'/>"/>
		<input type="hidden" id="commandVolumeNumber" name="commandVolumeNumber" value = "<spring:message code='command.volume.number'/>"/>
		<input type="hidden" id="commandVolumeBetween" name="commandVolumeBetween" value = "<spring:message code='command.volume.between'/>"/>
		<input type="hidden" id="commandTakeProfitNotEmpty" name="commandTakeProfitNotEmpty" value = "<spring:message code='command.takeprofit.not.empty'/>"/>
		<input type="hidden" id="commandTakeProfitNumber" name="commandTakeProfitNumber" value = "<spring:message code='command.takeprofit.number'/>"/>
		<input type="hidden" id="commandStopLossNotEmpty" name="commandStopLossNotEmpty" value = "<spring:message code='command.stoploss.not.empty'/>"/>
		<input type="hidden" id="commandStopLossNumber" name="commandStopLossNumber" value = "<spring:message code='command.stoploss.number'/>"/>
		<input type="hidden" id="commandExpirationDateNotEmpty" name="commandExpirationDateNotEmpty" value = "<spring:message code='command.expirationdate.not.empty'/>"/>
        <input type="hidden" id="commandCreateCodeSucess" name="commandCreateCodeSucess" value = "<spring:message code='command.create.code.sucess'/>"/>
        <input type="hidden" id="commandColse" name="commandColse" value = "<spring:message code='command.colse'/>"/>
        <input type="hidden" id="commandDetails" name="commandDetails" value = "<spring:message code='command.details'/>"/>
        <input type="hidden" id="commandCopyCode" name="commandCopyCode" value = "<spring:message code='command.copy.code'/>"/>

        <input type="hidden" id="commandLoginPhoneorPasswordNotEmpty" name="commandLoginPhoneorPasswordNotEmpty" value = "<spring:message code='command.login.phoneorpassword.not.empty'/>"/>
        <input type="hidden" id="commandLoginCorrectPhone" name="commandLoginCorrectPhone" value = "<spring:message code='command.login.correct.phone'/>"/>
        <input type="hidden" id="commandLoginCorrectPassword" name="commandLoginCorrectPassword" value = "<spring:message code='command.login.correct.password'/>"/>
        <input type="hidden" id="commandLoginNoAuth" name="commandLoginNoAuth" value = "<spring:message code='command.login.noauth'/>"/>
        <input type="hidden" id="commandLoginLogin" name="commandLoginLogin" value = "<spring:message code='command.login.login'/>"/>

        <input type="hidden" id="commandMakertOrder" name="commandMakertOrder" value = "<spring:message code='command.makert.order'/>"/>
        <input type="hidden" id="commandPendingOrder" name="commandPendingOrder" value = "<spring:message code='command.pending.order'/>"/>
        <input type="hidden" id="commandCreateNewCode" name="commandCreateNewCode" value = "<spring:message code='command.create.new.code'/>"/>
        <input type="hidden" id="commandSelect" name="commandSelect" value = "<spring:message code='command.select'/>"/>

        <input type="hidden" id="commandPageEveryPageShow" name="commandPageEveryPageShow" value = "<spring:message code='command.page.every.page.show'/>"/>
        <input type="hidden" id="commandPageShowToEntries" name="commandPageShowToEntries" value = "<spring:message code='command.page.show.to.entries'/>"/>
        <input type="hidden" id="commandPageShowEmptyEntries" name="commandPageShowToEntries" value = "<spring:message code='command.page.show.empty.entries'/>"/>
        <input type="hidden" id="commandPagePrevious" name="commandPagePrevious" value = "<spring:message code='command.page.previous'/>"/>
        <input type="hidden" id="commandPageNext" name="commandPageNext" value = "<spring:message code='command.page.next'/>"/>
        <input type="hidden" id="commandPageNoCommand" name="commandPageNoCommand" value = "<spring:message code='command.page.no.command'/>"/>





</html>
