import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { Post } from 'models';

const posts: Post[] = [
  {
    body: '',
    id: 0,
    title: '',
    userId: 0
  },
  {
    body: '',
    id: 0,
    title: '',
    userId: 0
  }
];

import { PostListComponent } from './post-list.component';
import { PostListModule } from './post-list.module';
export default {
  title: 'Components/Post List',
  component: PostListComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, PostListModule]
    })
  ]
} as Meta;

const Template: Story<PostListComponent> = (args: PostListComponent) => ({
  component: PostListComponent,
  props: args
});

export const Default = Template.bind({});
Default.args = {
  posts,
  isLoading: false
};
export const Loading = Template.bind({});
Loading.args = {
  posts: [],
  isLoading: true
};
export const Empty = Template.bind({});
Empty.args = {
  posts: [],
  isLoading: false
};
