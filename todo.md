# MH Instruments - Project TODO

## Phase 1: Core Infrastructure
- [x] Design database schema (users, music, beats, orders, earnings, withdrawals)
- [ ] Set up Stripe integration
- [ ] Configure S3 cloud storage for media files
- [ ] Set up email notification system

## Phase 2: Authentication & Layout
- [x] Build core navigation layout with MH Instruments logo
- [x] Implement login/signup pages with role-based access (artist/admin)
- [x] Create authentication context and protected routes
- [ ] Build user profile management

## Phase 3: Public Pages
- [x] Build landing page with hero section "EMBRACE YOUR CREATIVITY"
- [x] Create pricing page (Free Plan: $0, 75% royalties; Pro Plan: $8/month, 100% royalties)
- [x] Build support/contact page with email and WhatsApp links
- [x] Add social media links (Facebook & YouTube)
- [ ] Create artist testimonials/success stories section

### Phase 4: Artist Dashboard - Music Management
- [x] Build artist dashboard layout with tabs (Drafts, Released, Deleted)
- [ ] Implement music search functionality (by title/artist)
- [ ] Create music upload wizard (Step 1: Release Details - Title, Language, Genre, Composer, Lyricist, Artist)
- [ ] Implement Step 2: Tracklist with drag-and-drop file uploader (.wav, .flac support)
- [ ] Implement Step 3: Cover Art upload with validation (no social logos, text restricted)
- [ ] Implement Step 4: Delivery Options (store and territory selection)
- [ ] Add hardcoded "MH Original Music" label field (locked, non-editable)
- [x] Implement music status indicators (In Moderation, Released, Draft, Deleted)
- [x] Add "+Create" button for new releases

## Phase 5: Artist Dashboard - Earnings & Royalties
- [x] Build earnings dashboard showing balance
- [ ] Implement earnings calculation based on subscription plan (75% Free, 100% Pro)
- [x] Create revenue breakdown by track visualization
- [ ] Add earnings history/transaction log

## Phase 6: Artist Dashboard - Withdrawals
- [x] Build withdrawal request form
- [x] Integrate Binance (Crypto) payment method
- [x] Integrate Payoneer payment method
- [x] Create withdrawal history/transaction tracking
- [x] Implement withdrawal status management (Pending, Approved, Rejected, Completed)

## Phase 7: Beat Store Marketplace
- [x] Create beat store landing page
- [x] Build beat listing with search and filters
- [ ] Implement audio preview functionality
- [ ] Add beat purchase functionality with Stripe integration
- [ ] Create beat detail page with specifications and pricing

## Phase 8: Custom Music Composition
- [ ] Build custom music order form
- [ ] Implement raw melody/vocal file upload
- [ ] Add order specifications/instructions input
- [ ] Create order submission with Stripe payment
- [ ] Build order status tracking for users

## Phase 9: Admin Dashboard
- [x] Build admin dashboard layout
- [x] Implement user management (view, edit, promote to admin)
- [x] Create music moderation interface (approve/reject releases)
- [x] Build custom music order management (download raw files, upload final tracks)
- [x] Implement withdrawal request processing (approve/reject/process)
- [ ] Create dynamic content editor (prices, texts, banners)
- [ ] Add admin analytics and statistics

## Phase 10: Notifications & Integrations
- [ ] Set up email notifications for upload approvals
- [ ] Implement earnings update notifications
- [ ] Create withdrawal confirmation emails
- [ ] Add order status change notifications
- [ ] Implement admin notifications for new orders/withdrawals

## Phase 11: Polish & Optimization
- [ ] Ensure responsive design across all devices
- [ ] Optimize performance (lazy loading, caching)
- [ ] Add loading states and error handling
- [ ] Implement accessibility features
- [ ] Test all payment flows
- [ ] Cross-browser testing
- [ ] Security audit and validation

## Completed
- [x] Generate MH Instruments logo
- [x] Initialize web project with full-stack scaffold
