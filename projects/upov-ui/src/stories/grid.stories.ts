import type {Meta, StoryObj} from '@storybook/angular';

const meta: Meta = {
  title: 'Layout/Grid System',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
A mobile-first, responsive 12-column grid system using CSS Grid. Follows Material Design breakpoints and utility-first approach.

## Breakpoints

| Breakpoint | Min-Width | Max-Width | Description |
|------------|-----------|-----------|-------------|
| (base)     | 0px       | 599px     | Mobile devices |
| sm         | 600px     | 959px     | Small tablets, large phones |
| md         | 960px     | 1279px    | Tablets, small laptops |
| lg         | 1280px    | 1919px    | Laptops, desktops |
| xl         | 1920px    | -         | Large desktops, 4K screens |

## Basic Usage

\`\`\`html
<div class="grid">
  <div class="col-12 md:col-6 lg:col-4">Column</div>
</div>
\`\`\`

## Container

Use \`.grid-container\` for centered, max-width content or \`.grid-container-fluid\` for full-width.

## Gap Utilities

Control spacing with: \`gap-none\`, \`gap-xs\`, \`gap-sm\`, \`gap-md\`, \`gap-lg\`, \`gap-xl\`, \`gap-2xl\`
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj;

/**
 * Basic 12-column grid with equal columns.
 * Each column spans the full width on mobile and adjusts at breakpoints.
 */
export const EqualWidthColumns: Story = {
  render: () => ({
    template: `
      <div class="grid gap-md">
        <div class="col-12 md:col-6 grid-demo">
          col-12 md:col-6
        </div>
        <div class="col-12 md:col-6 grid-demo">
          col-12 md:col-6
        </div>
      </div>

      <div style="margin-top: 2rem;"></div>

      <div class="grid gap-md">
        <div class="col-12 md:col-4 grid-demo">
          col-12 md:col-4
        </div>
        <div class="col-12 md:col-4 grid-demo">
          col-12 md:col-4
        </div>
        <div class="col-12 md:col-4 grid-demo">
          col-12 md:col-4
        </div>
      </div>
    `,
  }),
};

/**
 * Demonstrates all 12 columns of the grid system.
 * Mobile: stacked, Desktop: 12 equal columns.
 */
export const TwelveColumns: Story = {
  render: () => ({
    template: `
      <div class="grid gap-sm">
        <div class="col-12 md:col-1 grid-demo">1</div>
        <div class="col-12 md:col-1 grid-demo">2</div>
        <div class="col-12 md:col-1 grid-demo">3</div>
        <div class="col-12 md:col-1 grid-demo">4</div>
        <div class="col-12 md:col-1 grid-demo">5</div>
        <div class="col-12 md:col-1 grid-demo">6</div>
        <div class="col-12 md:col-1 grid-demo">7</div>
        <div class="col-12 md:col-1 grid-demo">8</div>
        <div class="col-12 md:col-1 grid-demo">9</div>
        <div class="col-12 md:col-1 grid-demo">10</div>
        <div class="col-12 md:col-1 grid-demo">11</div>
        <div class="col-12 md:col-1 grid-demo">12</div>
      </div>
    `,
  }),
};

/**
 * Mix and match different column widths.
 * Columns automatically wrap to the next line.
 */
export const MixedWidths: Story = {
  render: () => ({
    template: `
      <div class="grid gap-md">
        <div class="col-12 md:col-8 grid-demo">
          col-12 md:col-8
        </div>
        <div class="col-12 md:col-4 grid-demo">
          col-12 md:col-4
        </div>
      </div>

      <div style="margin-top: 1rem;"></div>

      <div class="grid gap-md">
        <div class="col-12 md:col-3 grid-demo">
          col-12 md:col-3
        </div>
        <div class="col-12 md:col-6 grid-demo">
          col-12 md:col-6
        </div>
        <div class="col-12 md:col-3 grid-demo">
          col-12 md:col-3
        </div>
      </div>

      <div style="margin-top: 1rem;"></div>

      <div class="grid gap-md">
        <div class="col-12 md:col-2 grid-demo">
          md:col-2
        </div>
        <div class="col-12 md:col-8 grid-demo">
          md:col-8
        </div>
        <div class="col-12 md:col-2 grid-demo">
          md:col-2
        </div>
      </div>
    `,
  }),
};

/**
 * Responsive columns that change width at different breakpoints.
 * Demonstrates mobile-first approach: base → sm → md → lg → xl.
 */
export const ResponsiveColumns: Story = {
  render: () => ({
    template: `
      <p style="font-size: 14px; color: #666; margin-bottom: 1rem;">
        Mobile: 1 column → sm: 2 columns → md: 3 columns → lg: 4 columns
      </p>
      <div class="grid gap-md">
        <div class="col-12 sm:col-6 md:col-4 lg:col-3 grid-demo">
          col-12<br/>
          sm:col-6<br/>
          md:col-4<br/>
          lg:col-3
        </div>
        <div class="col-12 sm:col-6 md:col-4 lg:col-3 grid-demo">
          col-12<br/>
          sm:col-6<br/>
          md:col-4<br/>
          lg:col-3
        </div>
        <div class="col-12 sm:col-6 md:col-4 lg:col-3 grid-demo">
          col-12<br/>
          sm:col-6<br/>
          md:col-4<br/>
          lg:col-3
        </div>
        <div class="col-12 sm:col-6 md:col-4 lg:col-3 grid-demo">
          col-12<br/>
          sm:col-6<br/>
          md:col-4<br/>
          lg:col-3
        </div>
      </div>
    `,
  }),
};

/**
 * Full-width column that spans all 12 columns.
 */
export const FullWidthColumn: Story = {
  render: () => ({
    template: `
      <div class="grid gap-md">
        <div class="col-full grid-demo">
          col-full (spans all 12 columns)
        </div>
        <div class="col-12 md:col-6 grid-demo">
          col-12 md:col-6
        </div>
        <div class="col-12 md:col-6 grid-demo">
          col-12 md:col-6
        </div>
      </div>
    `,
  }),
};

/**
 * Different gap sizes between grid items.
 */
export const GapSizes: Story = {
  render: () => ({
    template: `
      <div class="grid gap-none">
        <div class="col-12 md:col-4 grid-demo">Column 1</div>
        <div class="col-12 md:col-4 grid-demo">Column 2</div>
        <div class="col-12 md:col-4 grid-demo">Column 3</div>
      </div>

      <div style="margin-top: 2rem;"></div>
      <div class="grid gap-sm">
        <div class="col-12 md:col-4 grid-demo">Column 1</div>
        <div class="col-12 md:col-4 grid-demo">Column 2</div>
        <div class="col-12 md:col-4 grid-demo">Column 3</div>
      </div>

      <div style="margin-top: 2rem;"></div>
      <div class="grid gap-md">
        <div class="col-12 md:col-4 grid-demo">Column 1</div>
        <div class="col-12 md:col-4 grid-demo">Column 2</div>
        <div class="col-12 md:col-4 grid-demo">Column 3</div>
      </div>

      <div style="margin-top: 2rem;"></div>
      <div class="grid gap-xl">
        <div class="col-12 md:col-4 grid-demo">Column 1</div>
        <div class="col-12 md:col-4 grid-demo">Column 2</div>
        <div class="col-12 md:col-4 grid-demo">Column 3</div>
      </div>
    `,
  }),
};

/**
 * Row and column gap can be controlled independently.
 */
export const IndependentGaps: Story = {
  render: () => ({
    template: `
      <div class="grid gap-x-lg gap-y-sm">
        <div class="col-12 md:col-4 grid-demo">Column 1</div>
        <div class="col-12 md:col-4 grid-demo">Column 2</div>
        <div class="col-12 md:col-4 grid-demo">Column 3</div>
        <div class="col-12 md:col-4 grid-demo">Column 4</div>
        <div class="col-12 md:col-4 grid-demo">Column 5</div>
        <div class="col-12 md:col-4 grid-demo">Column 6</div>
      </div>
    `,
  }),
};

/**
 * Nested grids allow for complex layouts.
 */
export const NestedGrids: Story = {
  render: () => ({
    template: `
      <div class="grid gap-md">
        <div class="col-12 md:col-8 grid-demo-dark" style="padding: 1rem;">
          <div style="margin-bottom: 0.5rem; font-weight: 600;">Parent: col-12 md:col-8</div>
          <div class="grid gap-sm">
            <div class="col-12 md:col-6 grid-demo">
              Nested 1
            </div>
            <div class="col-12 md:col-6 grid-demo">
              Nested 2
            </div>
          </div>
        </div>
        <div class="col-12 md:col-4 grid-demo">
          col-12 md:col-4
        </div>
      </div>
    `,
  }),
};

/**
 * Vertical alignment of grid items.
 */
export const VerticalAlignment: Story = {
  render: () => ({
    template: `
      <div>items-start</div>
      <div class="grid gap-md items-start" style="min-height: 120px; background: #f5f5f5; padding: 1rem;">
        <div class="col-12 md:col-4 grid-demo">Column 1</div>
        <div class="col-12 md:col-4 grid-demo" style="min-height: 80px;">Column 2<br/>Taller</div>
        <div class="col-12 md:col-4 grid-demo">Column 3</div>
      </div>

      <div style="margin-top: 2rem;">items-center</div>
      <div class="grid gap-md items-center" style="min-height: 120px; background: #f5f5f5; padding: 1rem;">
        <div class="col-12 md:col-4 grid-demo">Column 1</div>
        <div class="col-12 md:col-4 grid-demo" style="min-height: 80px;">Column 2<br/>Taller</div>
        <div class="col-12 md:col-4 grid-demo">Column 3</div>
      </div>

      <div style="margin-top: 2rem;">items-end</div>
      <div class="grid gap-md items-end" style="min-height: 120px; background: #f5f5f5; padding: 1rem;">
        <div class="col-12 md:col-4 grid-demo">Column 1</div>
        <div class="col-12 md:col-4 grid-demo" style="min-height: 80px;">Column 2<br/>Taller</div>
        <div class="col-12 md:col-4 grid-demo">Column 3</div>
      </div>

      <div style="margin-top: 2rem;">items-stretch</div>
      <div class="grid gap-md items-stretch" style="min-height: 120px; background: #f5f5f5; padding: 1rem;">
        <div class="col-12 md:col-4 grid-demo">Column 1</div>
        <div class="col-12 md:col-4 grid-demo" style="min-height: 80px;">Column 2<br/>Taller</div>
        <div class="col-12 md:col-4 grid-demo">Column 3</div>
      </div>
    `,
  }),
};

/**
 * Horizontal alignment and justification of grid items using explicit positioning.
 * Use col-start-* and col-end-* to position items precisely in the grid.
 */
export const HorizontalAlignment: Story = {
  render: () => ({
    template: `
      <p style="font-size: 14px; color: #666; margin-bottom: 1rem;">
        Left-aligned: Items start at column 1
      </p>
      <div class="grid gap-md">
        <div class="col-start-1 col-end-4 grid-demo">Columns 1-3</div>
        <div class="col-start-4 col-end-7 grid-demo">Columns 4-6</div>
      </div>

      <div style="margin-top: 2rem;"></div>
      <p style="font-size: 14px; color: #666; margin-bottom: 1rem;">
        Center-aligned: Items positioned in the middle
      </p>
      <div class="grid gap-md">
        <div class="col-start-4 col-end-7 grid-demo">Columns 4-6</div>
        <div class="col-start-7 col-end-10 grid-demo">Columns 7-9</div>
      </div>

      <div style="margin-top: 2rem;"></div>
      <p style="font-size: 14px; color: #666; margin-bottom: 1rem;">
        Right-aligned: Items end at column 13 (last column)
      </p>
      <div class="grid gap-md">
        <div class="col-start-7 col-end-10 grid-demo">Columns 7-9</div>
        <div class="col-start-10 col-end-13 grid-demo">Columns 10-12</div>
      </div>
    `,
  }),
};

/**
 * Individual item alignment overrides.
 */
export const ItemAlignment: Story = {
  render: () => ({
    template: `
      <div class="grid gap-md items-start" style="min-height: 120px; background: #f5f5f5; padding: 1rem;">
        <div class="col-12 md:col-3 self-start grid-demo">
          self-start
        </div>
        <div class="col-12 md:col-3 self-center grid-demo">
          self-center
        </div>
        <div class="col-12 md:col-3 self-end grid-demo">
          self-end
        </div>
        <div class="col-12 md:col-3 self-stretch grid-demo">
          self-stretch
        </div>
      </div>
    `,
  }),
};

/**
 * Column spanning with precise start and end positions.
 */
export const ColumnSpanning: Story = {
  render: () => ({
    template: `
      <p style="font-size: 14px; color: #666; margin-bottom: 1rem;">
        Using col-start and col-end utilities for precise control
      </p>
      <div class="grid gap-md">
        <div class="col-start-1 col-end-5 grid-demo">
          col-start-1 col-end-5<br/>(spans columns 1-4)
        </div>
        <div class="col-start-5 col-end-13 grid-demo">
          col-start-5 col-end-13<br/>(spans columns 5-12)
        </div>
      </div>

      <div style="margin-top: 1rem;"></div>

      <div class="grid gap-md">
        <div class="col-start-2 col-end-8 grid-demo">
          col-start-2 col-end-8<br/>(offset from start)
        </div>
        <div class="col-start-8 col-end-12 grid-demo">
          col-start-8 col-end-12
        </div>
      </div>
    `,
  }),
};

/**
 * Row spanning for multi-row layouts.
 */
export const RowSpanning: Story = {
  render: () => ({
    template: `
      <div class="grid gap-md">
        <div class="col-12 md:col-4 row-span-2 grid-demo-dark" style="min-height: 180px;">
          row-span-2<br/>
          (spans 2 rows)
        </div>
        <div class="col-12 md:col-8 grid-demo">
          Row 1
        </div>
        <div class="col-12 md:col-8 grid-demo">
          Row 2
        </div>
      </div>
    `,
  }),
};

/**
 * Grid containers with max-width.
 */
export const GridContainer: Story = {
  render: () => ({
    template: `
      <div class="grid-container" style="background: #f5f5f5; padding-top: 1rem; padding-bottom: 1rem;">
        <div class="grid gap-md">
          <div class="col-12 md:col-4 grid-demo">
            Column 1
          </div>
          <div class="col-12 md:col-4 grid-demo">
            Column 2
          </div>
          <div class="col-12 md:col-4 grid-demo">
            Column 3
          </div>
        </div>
      </div>

      <div style="margin-top: 2rem;"></div>
      <div class="grid-container-fluid" style="background: #f5f5f5; padding-top: 1rem; padding-bottom: 1rem;">
        <div class="grid gap-md">
          <div class="col-12 md:col-4 grid-demo">
            Column 1
          </div>
          <div class="col-12 md:col-4 grid-demo">
            Column 2
          </div>
          <div class="col-12 md:col-4 grid-demo">
            Column 3
          </div>
        </div>
      </div>
    `,
  }),
};

/**
 * Responsive visibility utilities.
 */
export const ResponsiveVisibility: Story = {
  render: () => ({
    template: `
      <div class="grid gap-md">
        <div class="col-12 md:col-4 grid-demo-light">
          Always visible
        </div>
        <div class="col-12 md:col-4 md:hidden grid-demo">
          Hidden on md+ (≥960px)<br/>
          class="md:hidden"
        </div>
        <div class="col-12 md:col-4 hidden md:block grid-demo-dark">
          Visible only on md+ (≥960px)<br/>
          class="hidden md:block"
        </div>
      </div>
    `,
  }),
};

/**
 * Visual order can be changed without changing HTML structure.
 */
export const OrderUtilities: Story = {
  render: () => ({
    template: `
      <p style="font-size: 14px; color: #666; margin-bottom: 1rem;">
        Items appear in this order in the HTML: 1, 2, 3, but display as: 3, 1, 2
      </p>
      <div class="grid gap-md">
        <div class="col-12 md:col-4 order-2 grid-demo">
          HTML Order: 1<br/>
          Visual: 2 (order-2)
        </div>
        <div class="col-12 md:col-4 order-3 grid-demo-dark">
          HTML Order: 2<br/>
          Visual: 3 (order-3)
        </div>
        <div class="col-12 md:col-4 order-1 grid-demo-light">
          HTML Order: 3<br/>
          Visual: 1 (order-1)
        </div>
      </div>
    `,
  }),
};

/**
 * Common layout patterns.
 */
export const CommonLayouts: Story = {
  render: () => ({
    template: `
      <div class="grid gap-md">
        <div class="col-12 lg:col-3 grid-demo-dark" style="min-height: 200px;">
          Sidebar<br/>
          col-12 lg:col-3
        </div>
        <div class="col-12 lg:col-9 grid-demo" style="min-height: 200px;">
          Main Content<br/>
          col-12 lg:col-9
        </div>
      </div>

      <div style="margin-top: 2rem;"></div>
      <div class="grid gap-md">
        <div class="col-full grid-demo-light">
          Header (col-full)
        </div>
        <div class="col-12 lg:col-3 grid-demo-dark" style="min-height: 150px;">
          Left Sidebar
        </div>
        <div class="col-12 lg:col-6 grid-demo" style="min-height: 150px;">
          Main Content
        </div>
        <div class="col-12 lg:col-3 grid-demo-dark" style="min-height: 150px;">
          Right Sidebar
        </div>
        <div class="col-full grid-demo-light">
          Footer (col-full)
        </div>
      </div>

      <div style="margin-top: 2rem;"></div>
      <div class="grid gap-lg">
        <div class="col-12 sm:col-6 lg:col-4 grid-demo" style="min-height: 120px;">
          Card 1
        </div>
        <div class="col-12 sm:col-6 lg:col-4 grid-demo" style="min-height: 120px;">
          Card 2
        </div>
        <div class="col-12 sm:col-6 lg:col-4 grid-demo" style="min-height: 120px;">
          Card 3
        </div>
        <div class="col-12 sm:col-6 lg:col-4 grid-demo" style="min-height: 120px;">
          Card 4
        </div>
        <div class="col-12 sm:col-6 lg:col-4 grid-demo" style="min-height: 120px;">
          Card 5
        </div>
        <div class="col-12 sm:col-6 lg:col-4 grid-demo" style="min-height: 120px;">
          Card 6
        </div>
      </div>
    `,
  }),
};

