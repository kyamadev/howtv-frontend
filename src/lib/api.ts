import axios from 'axios';

// APIのベースURL
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080/api/v1';

// Axiosインスタンスの作成
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 型定義
export interface Position {
  id: number;
  name: string;
}

export interface Company {
  uuid: number;
  name: string;
  address: string;
  industry: string;
  website: string;
  logo_url: string;
  description: string;
  founded_year: string;
  employee_count: string;
  job_postings?: JobPosting[];
}

export interface JobPosting {
  uuid: string;
  company_id: number;
  company?: Company;
  title: string;
  description: string;
  requirements: string;
  salary_range: string;
  location: string;
  employment_type: string;
  status: string;
  positions: Position[];
}

export interface RoadmapResponse {
  job_title: string;
  location: string;
  roadmap: string;
  question_type?: string;
}

export const apiClient = {
  // 全ての求人情報を取得
  getAllJobs: async (includeCompany: boolean = false): Promise<JobPosting[]> => {
    const queryParams = includeCompany ? '?include_company=true' : '';
    const response = await api.get<JobPosting[]>(`/jobs${queryParams}`);
    return response.data;
  },

  // 特定の求人情報を取得
  getJob: async (uuid: string, includeCompany: boolean = true): Promise<JobPosting> => {
    const queryParams = includeCompany ? '?include_company=true' : '';
    const response = await api.get<JobPosting>(`/jobs/${uuid}${queryParams}`);
    return response.data;
  },

  // 求人情報を作成
  createJob: async (job: Partial<JobPosting>, positionIds: number[]): Promise<JobPosting> => {
    const response = await api.post<JobPosting>('/jobs', {
      ...job,
      position_ids: positionIds
    });
    return response.data;
  },

  // 求人情報を更新
  updateJob: async (uuid: string, job: Partial<JobPosting>, positionIds: number[]): Promise<JobPosting> => {
    const response = await api.put<JobPosting>(`/jobs/${uuid}`, {
      ...job,
      position_ids: positionIds
    });
    return response.data;
  },

  // 求人情報を削除
  deleteJob: async (uuid: string): Promise<void> => {
    await api.delete(`/jobs/${uuid}`);
  },

  // 全ての会社情報を取得
  getAllCompanies: async (): Promise<Company[]> => {
    const response = await api.get<Company[]>('/companies');
    return response.data;
  },

  // 特定の会社情報を取得
  getCompany: async (id: number): Promise<Company> => {
    const response = await api.get<Company>(`/companies/${id}`);
    return response.data;
  },

  // 会社情報を作成
  createCompany: async (company: Partial<Company>): Promise<Company> => {
    const response = await api.post<Company>('/companies', company);
    return response.data;
  },

  // 会社情報を更新
  updateCompany: async (id: number, company: Partial<Company>): Promise<Company> => {
    const response = await api.put<Company>(`/companies/${id}`, company);
    return response.data;
  },

  // 会社情報を削除
  deleteCompany: async (id: number): Promise<void> => {
    await api.delete(`/companies/${id}`);
  },

  // 全ての職種を取得
  getAllPositions: async (): Promise<Position[]> => {
    const response = await api.get<Position[]>('/positions');
    return response.data;
  },

  // 職種を作成
  createPosition: async (name: string): Promise<Position> => {
    const response = await api.post<Position>('/positions', { name });
    return response.data;
  },

  // 求人情報にポジションを割り当て
  assignPositionsToJob: async (uuid: string, positionIds: number[]): Promise<void> => {
    await api.post(`/jobs/${uuid}/positions`, positionIds);
  },

  // ロードマップを生成（質問タイプに対応）
  generateRoadmap: async (uuid: string, questionType: string = 'general'): Promise<RoadmapResponse> => {
    const response = await api.get<RoadmapResponse>(`/jobs/${uuid}/roadmap?question_type=${questionType}`);
    return response.data;
  }
};