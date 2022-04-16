import React, { Children } from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import NavMenuView, {NavMenuViewProps} from '../components/NavMenuView';
import { useArgs } from '@storybook/client-api';

export default {
    title: 'miridi/shared/NavMenuView',
    component: NavMenuView
} as ComponentMeta<typeof NavMenuView>;

const Template: ComponentStory<typeof NavMenuView> = (args) =>
    <NavMenuView {...args} ></NavMenuView>;

export const Primary = Template.bind({});
const arr = [0, 1, 2];
Primary.args = {
    menuCount: 3,
    defaultIndex: 1,
    contents: [
        {
            index: 0,
            title: '무료',
            contents: <h2>free contents</h2>
        },
        {
            index: 1,
            title: 'Pro',
            contents: <h2>Pro contents</h2>
        },
        {
            index: 2,
            title: 'Eeterprise',
            contents: <h2>Enterprise contents</h2>
        }
    ]
} as NavMenuViewProps;
