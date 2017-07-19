/**
* Interfaces.ts
*
* Copyright (c) Microsoft Corporation. All rights reserved.
* Licensed under the MIT license.
*
* Defines the template for the ReactXP interface that needs to be
* implemented for each platform.
*/
import React = require('react');
import SubscribableEvent from 'subscribableevent';
import SyncTasks = require('synctasks');
import Types = require('./Types');
export import Types = Types;
export interface ReactXP {
    Accessibility: Accessibility;
    Alert: Alert;
    Animated: Animated;
    App: App;
    Clipboard: Clipboard;
    Input: Input;
    Storage: Storage;
    Location: Location;
    Modal: Modal;
    Network: Network;
    Platform: Platform;
    Popup: Popup;
    StatusBar: StatusBar;
    Styles: Styles;
    ActivityIndicator: typeof ActivityIndicator;
    Button: typeof Button;
    Image: typeof Image;
    GestureView: typeof GestureView;
    Link: typeof Link;
    Navigator: typeof Navigator;
    Picker: typeof Picker;
    ScrollView: typeof ScrollView;
    Text: typeof Text;
    TextInput: typeof TextInput;
    UserInterface: UserInterface;
    UserPresence: UserPresence;
    View: typeof View;
    WebView: typeof WebView;
    Component: typeof Component;
    Children: typeof React.Children;
    Types: typeof Types;
    createElement: any;
    __spread: any;
}
export declare abstract class ActivityIndicator extends React.Component<Types.ActivityIndicatorProps, any> {
}
export declare abstract class Alert {
    abstract show(title: string, message?: string, buttons?: Types.AlertButtonSpec[], icon?: string): void;
}
export declare abstract class AnimatedComponent<P extends Types.CommonProps, T> extends React.Component<P, T> {
    abstract setNativeProps(props: P): void;
}
export declare abstract class AnimatedImage extends AnimatedComponent<Types.AnimatedImageProps, {}> {
}
export declare abstract class AnimatedText extends AnimatedComponent<Types.AnimatedTextProps, {}> {
}
export declare abstract class AnimatedTextInput extends AnimatedComponent<Types.AnimatedTextInputProps, {}> {
}
export declare abstract class AnimatedView extends AnimatedComponent<Types.AnimatedViewProps, {}> {
    abstract setFocusRestricted(restricted: boolean): void;
    abstract setFocusLimited(limited: boolean): void;
}
export interface IAnimatedValue {
    setValue(value: number): void;
    addListener(callback: any): string;
    removeListener(id: string): void;
    removeAllListeners(): void;
    interpolate(config: any): IAnimatedValue;
}
export declare abstract class App {
    initialize(debug: boolean, development: boolean): void;
    abstract getActivationState(): Types.AppActivationState;
    activationStateChangedEvent: SubscribableEvent<(state: Types.AppActivationState) => void>;
    memoryWarningEvent: SubscribableEvent<() => void>;
}
export declare abstract class UserInterface {
    abstract setMainView(element: React.ReactElement<any>): void;
    abstract useCustomScrollbars(enable: boolean): void;
    abstract isHighPixelDensityScreen(): boolean;
    abstract getPixelRatio(): number;
    abstract measureLayoutRelativeToWindow(component: React.Component<any, any>): SyncTasks.Promise<Types.LayoutInfo>;
    abstract measureLayoutRelativeToAncestor(component: React.Component<any, any>, ancestor: React.Component<any, any>): SyncTasks.Promise<Types.LayoutInfo>;
    abstract measureWindow(): Types.Dimensions;
    abstract getContentSizeMultiplier(): SyncTasks.Promise<number>;
    contentSizeMultiplierChangedEvent: SubscribableEvent<(multiplier: number) => void>;
    abstract dismissKeyboard(): void;
    abstract enableTouchLatencyEvents(latencyThresholdMs: number): void;
    touchLatencyEvent: SubscribableEvent<(observedLatencyMs: number) => void>;
    abstract isNavigatingWithKeyboard(): boolean;
    keyboardNavigationEvent: SubscribableEvent<(isNavigatingWithKeyboard: boolean) => void>;
}
export declare abstract class Modal {
    abstract isDisplayed(modalId: string): boolean;
    abstract show(modal: React.ReactElement<Types.ViewProps>, modalId: string): void;
    abstract dismiss(modalId: string): void;
    abstract dismissAll(): void;
}
export declare abstract class Popup {
    abstract show(options: Types.PopupOptions, popupId: string, delay?: number): boolean;
    abstract autoDismiss(popupId: string, delay?: number): void;
    abstract dismiss(popupId: string): void;
    abstract dismissAll(): void;
}
export declare abstract class Linking {
    abstract getInitialUrl(): SyncTasks.Promise<string>;
    deepLinkRequestEvent: SubscribableEvent<(url: string) => void>;
    abstract openUrl(url: string): SyncTasks.Promise<void>;
    abstract launchSms(smsData: Types.SmsInfo): SyncTasks.Promise<void>;
    abstract launchEmail(emailData: Types.EmailInfo): SyncTasks.Promise<void>;
    protected abstract _createEmailUrl(emailInfo: Types.EmailInfo): string;
}
export declare abstract class Accessibility {
    abstract isScreenReaderEnabled(): boolean;
    abstract announceForAccessibility(announcement: string): void;
    screenReaderChangedEvent: SubscribableEvent<(isEnabled: boolean) => void>;
}
export declare abstract class Button extends React.Component<Types.ButtonProps, any> {
}
export declare abstract class Picker extends React.Component<Types.PickerProps, {}> {
}
export declare class Component<P, T> extends React.Component<P, T> {
}
export declare abstract class Image extends React.Component<Types.ImageProps, any> {
}
export declare abstract class Clipboard {
    abstract setText(text: string): void;
    abstract getText(): SyncTasks.Promise<string>;
}
export declare abstract class Link extends React.Component<Types.LinkProps, any> {
}
export declare abstract class Storage {
    abstract getItem(key: string): SyncTasks.Promise<string | undefined>;
    abstract setItem(key: string, value: string): SyncTasks.Promise<void>;
    abstract removeItem(key: string): SyncTasks.Promise<void>;
    abstract clear(): SyncTasks.Promise<void>;
}
export declare abstract class Location {
    abstract isAvailable(): boolean;
    abstract setConfiguration(config: LocationConfiguration): void;
    abstract getCurrentPosition(options?: PositionOptions): SyncTasks.Promise<Position>;
    abstract watchPosition(successCallback: Types.LocationSuccessCallback, errorCallback?: Types.LocationFailureCallback, options?: PositionOptions): SyncTasks.Promise<Types.LocationWatchId>;
    abstract clearWatch(watchID: Types.LocationWatchId): void;
}
export interface LocationConfiguration {
    skipPermissionRequests: boolean;
}
export declare abstract class Navigator extends React.Component<Types.NavigatorProps, any> {
    abstract push(route: Types.NavigatorRoute): void;
    abstract pop(): void;
    abstract replace(route: Types.NavigatorRoute): void;
    abstract replacePrevious(route: Types.NavigatorRoute): void;
    abstract replaceAtIndex(route: Types.NavigatorRoute, index: number): void;
    abstract immediatelyResetRouteStack(nextRouteStack: Types.NavigatorRoute[]): void;
    abstract popToRoute(route: Types.NavigatorRoute): void;
    abstract popToTop(): void;
    abstract getCurrentRoutes(): Types.NavigatorRoute[];
}
export declare abstract class Network {
    abstract isConnected(): SyncTasks.Promise<boolean>;
    connectivityChangedEvent: SubscribableEvent<(isConnected: boolean) => void>;
}
export declare abstract class Platform {
    abstract getType(): Types.PlatformType;
}
export declare abstract class Input {
    backButtonEvent: SubscribableEvent<() => boolean>;
    keyDownEvent: SubscribableEvent<(e: Types.KeyboardEvent) => boolean>;
    keyUpEvent: SubscribableEvent<(e: Types.KeyboardEvent) => boolean>;
}
export interface IScrollView {
    setScrollTop(scrollTop: number, animate: boolean): void;
    setScrollLeft(scrollLeft: number, animate: boolean): void;
    addToScrollTop(deltaTop: number, animate: boolean): void;
    addToScrollLeft(deltaLeft: number, animate: boolean): void;
}
export declare abstract class ScrollView extends React.Component<Types.ScrollViewProps, any> implements IScrollView {
    abstract setScrollTop(scrollTop: number, animate: boolean): void;
    abstract setScrollLeft(scrollLeft: number, animate: boolean): void;
    abstract addToScrollTop(deltaTop: number, animate: boolean): void;
    abstract addToScrollLeft(deltaLeft: number, animate: boolean): void;
}
export declare abstract class StatusBar {
    abstract isOverlay(): boolean;
    abstract setHidden(hidden: boolean, showHideTransition: 'fade' | 'slide'): void;
    abstract setBarStyle(style: 'default' | 'light-content' | 'dark-content', animated: boolean): void;
    abstract setNetworkActivityIndicatorVisible(value: boolean): void;
    abstract setBackgroundColor(color: string, animated: boolean): void;
    abstract setTranslucent(translucent: boolean): void;
}
export declare abstract class Styles {
    abstract combine<T>(ruleSet1: Types.StyleRuleSetRecursive<T>, ruleSet2?: Types.StyleRuleSetRecursive<T>): Types.StyleRuleSetOrArray<T>;
    abstract createViewStyle(ruleSet: Types.ViewStyle, cacheStyle?: boolean): Types.ViewStyleRuleSet;
    abstract createAnimatedViewStyle(ruleSet: Types.AnimatedViewStyle): Types.AnimatedViewStyleRuleSet;
    abstract createScrollViewStyle(ruleSet: Types.ScrollViewStyle, cacheStyle?: boolean): Types.ScrollViewStyleRuleSet;
    abstract createButtonStyle(ruleSet: Types.ButtonStyle, cacheStyle?: boolean): Types.ButtonStyleRuleSet;
    abstract createWebViewStyle(ruleSet: Types.WebViewStyle, cacheStyle?: boolean): Types.WebViewStyleRuleSet;
    abstract createTextStyle(ruleSet: Types.TextStyle, cacheStyle?: boolean): Types.TextStyleRuleSet;
    abstract createAnimatedTextStyle(ruleSet: Types.AnimatedTextStyle): Types.AnimatedTextStyleRuleSet;
    abstract createTextInputStyle(ruleSet: Types.TextInputStyle, cacheStyle?: boolean): Types.TextInputStyleRuleSet;
    abstract createAnimatedTextInputStyle(ruleSet: Types.AnimatedTextInputStyle): Types.AnimatedTextInputStyleRuleSet;
    abstract createImageStyle(ruleSet: Types.ImageStyle, cacheStyle?: boolean): Types.ImageStyleRuleSet;
    abstract createAnimatedImageStyle(ruleSet: Types.AnimatedImageStyle): Types.AnimatedImageStyleRuleSet;
    abstract createLinkStyle(ruleSet: Types.LinkStyleRuleSet, cacheStyle?: boolean): Types.LinkStyleRuleSet;
    abstract createPickerStyle(ruleSet: Types.PickerStyle, cacheStyle?: boolean): Types.PickerStyleRuleSet;
}
export declare abstract class Text extends React.Component<Types.TextProps, any> {
}
export declare abstract class TextInput extends React.Component<Types.TextInputProps, any> {
    abstract blur(): void;
    abstract focus(): void;
    abstract setAccessibilityFocus(): void;
    abstract isFocused(): boolean;
    abstract selectAll(): void;
    abstract selectRange(start: number, end: number): void;
    abstract getSelectionRange(): {
        start: number;
        end: number;
    };
    abstract setValue(value: string): void;
}
export declare abstract class UserPresence {
    abstract isUserPresent(): boolean;
    userPresenceChangedEvent: SubscribableEvent<(isPresent: boolean) => void>;
}
export declare abstract class ViewBase<P, S> extends React.Component<P, S> {
}
export declare abstract class View extends ViewBase<Types.ViewProps, any> {
    abstract setFocusRestricted(restricted: boolean): void;
    abstract setFocusLimited(limited: boolean): void;
}
export declare abstract class GestureView extends ViewBase<Types.GestureViewProps, any> {
}
export declare abstract class WebView extends ViewBase<Types.WebViewProps, any> {
}
export interface Animated {
    Image: typeof AnimatedImage;
    Text: typeof AnimatedText;
    TextInput: typeof AnimatedTextInput;
    View: typeof AnimatedView;
    Value: typeof Types.AnimatedValue;
    Easing: Types.Animated.Easing;
    timing: Types.Animated.TimingFunction;
    parallel: Types.Animated.ParallelFunction;
    sequence: Types.Animated.SequenceFunction;
}