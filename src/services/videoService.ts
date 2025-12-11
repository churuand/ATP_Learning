import { get, post } from '../lib/api';

export interface Video {
  id: number;
  title: string;
  description?: string;
  video_url: string;
  youtube_video_id?: string;
  thumbnail_url?: string;
  category_id?: number;
  mentor?: string;
  duration?: number;
  price_credit: number;
  is_active: boolean;
  is_short: boolean;
  category?: VideoCategory;
  tags?: VideoTag[];
  created_at: string;
  updated_at: string;
}

export interface VideoCategory {
  id: number;
  name: string;
  slug?: string;
  parent_id?: number;
  is_active: boolean;
  parent?: VideoCategory;
}

export interface VideoTag {
  id: number;
  name: string;
  slug?: string;
  is_active?: boolean;
}

export interface VideosResponse {
  videos: Video[];
}

export interface VideoDetailResponse {
  video: Video;
  is_purchased: boolean;
  playlist_videos: Video[];
}

export interface PurchaseStatusResponse {
  purchased: boolean;
  member_credit: number;
  video_price: number;
  is_guest: boolean;
}

export interface PurchaseResponse {
  success: boolean;
  message: string;
  new_balance?: number;
}

export interface VideoCategoriesResponse {
  categories: {
    category: VideoCategory;
    level: number;
    display_name: string;
  }[];
  tree: VideoCategory[];
}

/**
 * Get list of videos
 */
export async function getVideos(filters?: {
  search?: string;
  category_id?: number;
  sort?: 'newest' | 'oldest' | 'title';
}): Promise<VideosResponse> {
  const params = new URLSearchParams();
  if (filters?.search) params.append('search', filters.search);
  if (filters?.category_id) params.append('category_id', filters.category_id.toString());
  if (filters?.sort) params.append('sort', filters.sort);

  const queryString = params.toString();
  return get(`/api/community/videos${queryString ? `?${queryString}` : ''}`);
}

/**
 * Get video detail
 */
export async function getVideoById(id: number): Promise<VideoDetailResponse> {
  return get(`/api/community/videos/${id}`);
}

/**
 * Check if member has purchased a video
 */
export async function checkPurchaseStatus(id: number): Promise<PurchaseStatusResponse> {
  return get(`/api/community/videos/${id}/purchase-status`);
}

/**
 * Purchase a video
 */
export async function purchaseVideo(id: number): Promise<PurchaseResponse> {
  return post(`/api/community/videos/${id}/purchase`);
}

/**
 * Get video categories tree
 */
export async function getVideoCategories(): Promise<VideoCategoriesResponse> {
  return get('/api/community/video-categories');
}

